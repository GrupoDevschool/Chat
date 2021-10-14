import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  nome: String,
  connections: [{ socketId: String, userId: String }],
  mensagens: [{ texto: String, autorId: String, dataCriacao: Date }],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
