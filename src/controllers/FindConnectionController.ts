import { Request, Response } from "express";
import { FindConnectionService } from "../services/FindConnectionService";

class FindConnectionController {
  async hadler(req: Request, res: Response) {
    const { id } = req.params;

    const findConnectionService = new FindConnectionService();

    const connection = await findConnectionService.execute(id);

    return res.json(connection);
  }
}

export { FindConnectionController };
