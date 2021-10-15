import { Mensagem } from "../models/Mensagem";
import { Room } from "../models/Room";

interface IMensagemRequest {
  texto: string;
  autor: string;
  room: string;
}

class CreateMessageService {
  async execute({ texto, autor, room }: IMensagemRequest) {
    const mensagem = new Mensagem({ texto, autor, room });
    const mensagemCriada = await mensagem.save();
    Room.findByIdAndUpdate(mensagem.room, {
      $set: {
        ultimaMensagem: mensagem._id,
      },
    });
    return mensagemCriada;
  }
}

export { CreateMessageService };
