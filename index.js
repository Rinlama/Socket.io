const express = require("express");
const { captureRejectionSymbol } = require("stream");
const chatService = require("./services/chat.service");

const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  // socket services register
  chatService(socket, io).broadcast();
});

server.listen(3000, () => {
  console.log("test");
});
