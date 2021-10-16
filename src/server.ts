import "./database";

import { Socket } from "socket.io";

import { http, io } from "./http";
import { CreateMessageService } from "./services/CreateMessageService";
import { ListMessagesService } from "./services/ListMessagesService";

io.on("connection", (socket: Socket) => {
  const listMessageService = new ListMessagesService();
  const createMessageService = new CreateMessageService();

  console.log("socket:" + socket.id);

  socket.on("select_room", async ({ roomName }, callback) => {
    const rooms = io.of("/").adapter.rooms;
    rooms.forEach((room, id) => {
      socket.leave(id);
    });
    socket.join(roomName);
    const mensagens = await listMessageService.execute(roomName);
    callback(mensagens);
  });

  socket.on("message", async (params) => {
    const { texto, autor, room } = params;
    const mensagem = await createMessageService.execute({ texto, autor, room });
    io.to(room).emit("message", mensagem);
  });

  socket.on("disconnect", () => {
    console.log("socketid: " + socket.id + " desconectou");
  });
});

http.listen(3333, () => console.log("Rodando na porta 3333"));
