import { Request, Response } from "express";
import { ListOlderMessagesService } from "../services/ListOlderMessageService";

class ListOlderMessagesController {
  async handle(req: Request, res: Response) {
    const { room, olderMessage } = req.query;

    const service = new ListOlderMessagesService();

    const messages = await service.execute(room as string, olderMessage as string);

    return res.json(messages);
  }
}

export { ListOlderMessagesController };
