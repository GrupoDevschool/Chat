import { Model, model, Schema } from "mongoose";
import { Room } from "../interfaces/Room";

const roomSchema = new Schema<Room, Model<Room>, Room>({
  nome: { type: String, required: true },
  ultimaMensagem: { type: Schema.Types.ObjectId, ref: "Mensagem" },
});

const Room = model<Room>("Room", roomSchema);

export { Room };
