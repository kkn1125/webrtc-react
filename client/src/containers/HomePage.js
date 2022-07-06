import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { load } from "../reducers/roomReducer";
import { commonStyles, linkButtonStyles } from "../styles/common";

const HomeBlock = styled.div`
  width: 70%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.room);
  const [roomId, setRoomId] = useState(Date.now() % 1000000);
  const handleRoomId = (e) => {
    setRoomId(e.target.value);
  };

  useEffect(() => {
    dispatch(load());
  }, []);

  return (
    <HomeBlock>
      <HomeBlock.Title />
      <HomeBlock.Input onChange={handleRoomId} value={roomId} />
      <HomeBlock.ButtonWrap>
        <HomeBlock.Button children='Enter' to={`/r/${roomId}`} />
      </HomeBlock.ButtonWrap>
      <HomeBlock.RoomList>
        {rooms.map((room) => (
          <Link key={room} to={`/r/${room}`}>
            {room}
          </Link>
        ))}
      </HomeBlock.RoomList>
    </HomeBlock>
  );
}

HomeBlock.Title = styled.h1.attrs({
  children: <>WebRTC + Socket.io Test</>,
})`
  text-align: center;
  font-size: 3rem;
`;

HomeBlock.Input = styled.input`
  border: 1px solid #ffffff55;
  ${commonStyles}
`;

HomeBlock.ButtonWrap = styled.div`
  margin-top: 1rem;
`;

HomeBlock.Button = styled(Link)`
  ${linkButtonStyles}
`;

HomeBlock.RoomList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  & a {
    color: white;
    text-decoration: none;
    &::before {
      content: "💡 ";
    }
    &::after {
      content: "번 방을 방문했었습니다.";
      color: grey;
    }
  }
`;

export default Home;
