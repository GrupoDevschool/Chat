import cors from "cors";
import express, { json } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import { router } from "./routes";

const app = express();

const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.use(json());

app.use(router);

export { http, io };
