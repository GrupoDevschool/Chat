import { Schema, model } from "mongoose";

const connectionSchema = new Schema({
  socketId: String,
  userId: String,
  roomId: String,
});

const Connection = model("Connection", connectionSchema);

export default Connection;
