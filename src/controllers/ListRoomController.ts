import { Request, Response } from "express";
import { ListRoomService } from "../services/ListRoomService";

class ListRoomController {
  async handle(req: Request, res: Response) {
    const listRoomService = new ListRoomService();

    const rooms = await listRoomService.execute();

    return res.json(rooms);
  }
}

export { ListRoomController };
