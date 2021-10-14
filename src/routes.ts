import { Router } from "express";
import { FindConnectionController } from "./controllers/FindConnectionController";
import { CreateConnectionService } from "./services/CreateConnectionService";

const router = Router();

const findConnectionController = new FindConnectionController();

router.get("/api/connection/:id", findConnectionController.hadler);

router.post("/api/connection", async (req, res) => {
  const { socketId, roomId, userId } = req.body;

  const createConnectionService = new CreateConnectionService();

  const connection = await createConnectionService.execute({
    socketId,
    roomId,
    userId,
  });

  return res.json(connection);
});

export { router };
