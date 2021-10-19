import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateRoomController } from "./controllers/CreateRoomController";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindConnectionController } from "./controllers/FindConnectionController";
import { ListOlderMessagesController } from "./controllers/ListOlderMessagesController";
import { ListRoomController } from "./controllers/ListRoomController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";
import { CreateConnectionService } from "./services/CreateConnectionService";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createRoomController = new CreateRoomController();
const listRoomController = new ListRoomController();
const findConnectionController = new FindConnectionController();
const listOlderMessagesController = new ListOlderMessagesController();

router.get("/api/olderMessages", listOlderMessagesController.handle);

router.post("/api/auth", authenticateUserController.handle);

router.post("/api/user", createUserController.handle);

router.post("/api/room", createRoomController.handle);
router.get("/api/room", listRoomController.handle);

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
