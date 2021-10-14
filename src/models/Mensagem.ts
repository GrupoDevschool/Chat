import { Model, model, Schema } from "mongoose";
import { Mensagem } from "./../interfaces/Mensagem";

const mensagemSchema = new Schema<Mensagem, Model<Mensagem>, Mensagem>(
  {
    texto: { type: String, required: true },
    autorId: { type: String, required: true },
    roomId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Mensagem = model<Mensagem>("Mensagem", mensagemSchema);

export { Mensagem };
