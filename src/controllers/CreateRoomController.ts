import { Request, Response } from "express";
import { CreateRoomService } from "../services/CreateRoomService";

class CreateRoomController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body;

    const createRoomService = new CreateRoomService();

    const room = await createRoomService.execute(nome);

    return res.status(201).json(room);
  }
}

export { CreateRoomController };
