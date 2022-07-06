/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { buttonStyles, videoStyles } from "../styles/common";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { join, save } from "../reducers/roomReducer";
import { io } from "socket.io-client";
import { css } from "@emotion/react";

const constraints = {
  video: true,
  audio: false,
};

let getUserMedia;
let socket;
let dataChannel;
let pc; // peer connection
let localStream;
let remoteStream;
let saveCounter;

function Room() {
  const [toggle, setToggle] = useState(true);
  const [countUser, setCountUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  useEffect(() => {
    socket = io("https://192.168.1.52:4000", {
      cors: {
        origin: "*",
      },
    });

    socket.on("connect", () => {
      // 서버 연결 표시
      socket.emit("join", params.room);
      dispatch(join(params.room));
      dispatch(save());

      init();

      // 서버에서 온 메세지
      socket.on("message", (msg) => {
        switch (msg.type) {
          case "offer":
            pc.setRemoteDescription(new RTCSessionDescription(msg))
              .then(() => pc.createAnswer())
              .then(setDescription)
              .then(sendDescription)
              .catch(handleError);
            break;
          case "answer":
            pc.setRemoteDescription(new RTCSessionDescription(msg));
            break;
          case "candidate":
            pc.addIceCandidate(msg.candidate);
            break;
          default:
            return;
        }
      });

      socket.on("userInRoom", (msg) => {
        console.log("[인원 변동] 현재 인원 ", msg);
        saveCounter = msg;
        setCountUser(msg);
      });
    });

    // 카메라 권한 요청
    // getUserMedia
    getUserMedia = navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        localVideo.current.srcObject = localStream = stream;
        console.log("local stream", stream);
        // addStream
        stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      })
      .catch(handleUserMediaError);

    return () => {
      socket.disconnect();
    };
  }, []);

  function handleUserMediaError(e) {
    console.log("handleUserMediaError");
    console.error(e.message);
  }

  function setDescription(offer) {
    return pc.setLocalDescription(offer);
  }
  function sendDescription() {
    socket.send(pc.localDescription);
  }
  function handleError(e) {
    console.log("handleError", e);
  }

  function handleData() {
    dataChannel.onmessage = function (e) {
      console.log("onmessage", e);
    };

    dataChannel.onclose = function (e) {
      console.log("onclose", e);
    };
  }

  function sendData(msg) {
    dataChannel.send(JSON.stringify(msg));
  }

  function attachMedia() {
    dataChannel = pc.createDataChannel("chat");
    handleData();
    pc.createOffer()
      .then(setDescription)
      .then(sendDescription)
      .catch(handleError);
  }

  function init() {
    // peerConnection 생성
    pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onicecandidate = function (e) {
      console.log("onicecandidate", e);
      if (e.candidate) {
        socket.send({
          type: "candidate",
          candidate: e.candidate,
        });
      }
    };

    pc.ontrack = function (e) {
      console.log("ontrack", e);
      remoteVideo.current.srcObject = remoteStream = e.streams[0];
    };

    pc.ondatachannel = function (e) {
      dataChannel = e.channel;
      console.log(localStream.getVideoTracks());
      handleData();
      sendData({
        peerMediaStream: {
          video: localStream.getVideoTracks()[0].enabled,
        },
      });
    };

    getUserMedia.then(attachMedia);
  }

  return (
    <RoomBlock>
      <div>{countUser ? countUser + "명 접속" : ""}</div>
      <Room.Wrap>
        <video
          ref={localVideo}
          autoPlay
          css={css`
            ${videoStyles}
          `}
        />
        <video
          ref={remoteVideo}
          autoPlay
          css={css`
            ${videoStyles}
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 150px;
            z-index: 10;
          `}
        />
      </Room.Wrap>
      <Room.Button>
        <Button
          onClick={() => {
            navigate("/");
          }}>
          나가기
        </Button>
        <Button>음소거</Button>
        {toggle && (
          <Button
            onClick={() => {
              socket.emit("connect");
              setToggle(false);
            }}>
            연결
          </Button>
        )}
        <Button>영상 보이기/숨기기</Button>
        <Button>전체 화면</Button>
      </Room.Button>
    </RoomBlock>
  );
}

const RoomBlock = styled.div`
  padding: 2rem;
  height: 100%;
`;

Room.Wrap = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;

Room.Button = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  ${buttonStyles}
`;

export default Room;
