import { Mensagem as MensagemModel } from "../models/Mensagem";

class ListOlderMessagesService {
  async execute(room: string, olderMessage: string) {
    const mensagens = await MensagemModel.find({ room, createdAt: { $lt: olderMessage } })
      .limit(20)
      .sort({ createdAt: -1})
      .populate("room")
      .populate({ path: "autor", select: "nome _id" })
      .exec();

    return mensagens;
  }
}

export { ListOlderMessagesService };
