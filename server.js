const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

const serverHost = process.env.IP_HOST;
const clientPort = process.env.CLIENT_PORT;
const serverPort = process.env.SERVER_PORT;
const key = process.env.SSL_KEY_FILE;
const crt = process.env.SSL_CRT_FILE;

const options = {
  // key: fs.readFileSync("../localhost-key.pem", "utf8"),
  // cert: fs.readFileSync("../localhost.pem", "utf8"),
  key: fs.readFileSync(__dirname + "/" + key),
  cert: fs.readFileSync(__dirname + "/" + crt),
};

// server, socket option
const server = https.createServer(options, app);
const io = new Server(server, {
  cors: {
    origin: `*`,
  },
});

// router
app.use("/", (req, res) => {
  res.send("test11");
});

// app listen
server.listen(serverPort, () => {
  console.log(`listening on https://${serverHost}:${serverPort}`);
});

// socket server settings

let roomList = {};
io.on("connection", (socket) => {
  // room 연결 설정
  let room = "";
  socket.on("join", (message) => {
    room = message;
    const alerts = `${room}번 채팅방에 ${socket.id}유저가 입장했습니다.`;
    if (!roomList[room]) {
      roomList[room] = [];
    }

    if (roomList[room].indexOf(socket.id) === -1) {
      roomList[room].push(socket.id);
    }
    console.log(roomList[room]);
    console.log(alerts, `현 인원 ${roomList[room].length}명`);

    // count of users
    socket.join(room);
    socket.broadcast.to(room).emit("message", alerts);

    // 본인에게 메세지
    io.emit("userInRoom", roomList[room].length);
    // 본인 외 모두에게 메세지
    socket.broadcast.to(room).emit("userInRoom", roomList[room].length);
  });

  // 영상 전송 주고 받기
  socket.on("message", (message) => {
    socket.broadcast.to(room).emit("message", message);
  });

  // 연결이 끊어졌을 때
  socket.on("disconnect", () => {
    console.log(`${room}번 방에서 ${socket.id}가 나갔습니다.`);
    roomList[room] = roomList[room].filter(
      (socketId) => socketId !== socket.id
    );
    console.log(roomList[room]);
    socket.broadcast.to(room).emit("userInRoom", roomList[room].length);
  });
});
