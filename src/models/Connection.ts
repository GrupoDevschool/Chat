import { Schema, model, Model } from "mongoose";
import { Connection } from "./../interfaces/Connection";

const connectionSchema = new Schema<Connection, Model<Connection>, Connection>(
  {
    socketId: String,
    userId: String,
    roomId: String,
  },
  { timestamps: true }
);

const Connection = model<Connection>("Connection", connectionSchema);

export default Connection;
