import { Model, model, Schema } from "mongoose";
import { Mensagem } from "./../interfaces/Mensagem";


const mensagemSchema = new Schema<Mensagem, Model<Mensagem>, Mensagem>(
  {
    texto: { type: String, required: true },
    autor: { type: String, required: true, ref: 'User' },
    room: { type: String, required: true, ref: 'Room' },
  },
  {
    timestamps: true,
  }
);

const Mensagem = model<Mensagem>("Mensagem", mensagemSchema);

export { Mensagem };
