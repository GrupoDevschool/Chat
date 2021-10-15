import "./database";

import { http, io } from "./http";
import { Socket } from "socket.io";
import { ListMessagesService } from "./services/ListMessagesService";
import { CreateMessageService } from "./services/CreateMessageService";

io.on("connection", (socket: Socket) => {
  const listMessageService = new ListMessagesService();
  const createMessageService = new CreateMessageService();

  console.log("socket:" + socket.id);

  socket.on("first_access", async ({ roomName }, callback) => {
    console.log(roomName);
    const mensagens = await listMessageService.execute(roomName);
    console.log(mensagens);
    callback(mensagens);
  });

  socket.on("message", async (params, callback) => {
    console.log(params);
    const { texto, autor, room } = params;
    const mensagem = await createMessageService.execute({ texto, autor, room });
    console.log(mensagem);
    callback(mensagem);
    socket.broadcast.emit("nova_msg", mensagem);
  });

  socket.on("disconnect", () => {
    console.log("socketid: " + socket.id + " desconectou");
  });
});

http.listen(3333, () => console.log("Rodando na porta 3333"));
