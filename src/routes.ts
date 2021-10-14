import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindConnectionController } from "./controllers/FindConnectionController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";
import { CreateConnectionService } from "./services/CreateConnectionService";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const findConnectionController = new FindConnectionController();
const createUserController = new CreateUserController();

router.post("/api/auth", authenticateUserController.handle);

router.post("/api/user", createUserController.handle);

router.get("/api/connection/:id", findConnectionController.hadler);
router.post("/api/connection", ensureAuthenticated, async (req, res) => {
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
