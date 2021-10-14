import { model, Schema } from "mongoose";

const roomSchema = new Schema({
  nome: { type: String, required: true },
  connections: [
    {
      socketId: { type: String, required: true },
      userId: { type: String, required: true },
    },
  ],
});

const Room = model("Room", roomSchema);

export default Room;
