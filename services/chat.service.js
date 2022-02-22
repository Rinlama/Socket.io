function chatService(socket, io) {
  const broadcast = () => {
    socket.on("broadcastMessage", (message) => {
      console.log(message);
      io.local.emit("handleMessage", message);
    });
  };
  return { broadcast };
}
module.exports = chatService;
