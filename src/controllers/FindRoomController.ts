import { Request, Response } from "express";
import { FindRoomService } from "../services/FindRoomService";

class FindRoomController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const findRoomService = new FindRoomService();

    const room = await findRoomService.execute(id);

    return res.json(room);
  }
}

export { FindRoomController };
