import { Mensagem as MensagemModel } from "../models/Mensagem";
import { Mensagem } from "../interfaces/Mensagem";

class ListMessagesService {
  async execute(room: string) {
    const mensagens = await MensagemModel.find({ room })
      .populate("room")
      .populate({ path: "autor", select: "nome _id" })
      .exec();

    return mensagens;
  }
}

export { ListMessagesService };
