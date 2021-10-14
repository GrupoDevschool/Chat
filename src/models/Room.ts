import { model, Schema } from "mongoose";

const roomSchema = new Schema({
  nome: { type: String, required: true },
  connections: [
    {
      socketId: { type: String, required: true },
      userId: { type: String, required: true },
    },
  ],
  mensagens: [
    {
      texto: { type: String, required: true },
      autorId: { type: String, required: true },
      dataCriacao: { type: Date, default: new Date() },
    },
  ],
});

const Room = model("Room", roomSchema);

export default Room;
