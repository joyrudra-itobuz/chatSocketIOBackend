import express from "express";
import http from "http";
import cors from "cors";
import { Server as SocketIO } from "socket.io";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new SocketIO(server, {
  cors: {
    origin: ["http://127.0.0.1:5500/index.html"],
  },
});

io.use(cors());

app.get("/", (req, res) => {
  res.send("Hi");
});

// io.on("connection", (socket) => {
//   console.log("A user connected with id ", socket.id);
//   // Handle events from the client
//   socket.on("chat message", (msg) => {
//     console.log("Message:", msg);
//     io.emit("chat message", msg); // Broadcast the message to all connected clients
//   });

io.on("connection", (socket) => {
  console.log(socket.id);
});

io.on("disconnect", () => {
  console.log("A user disconnected");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
