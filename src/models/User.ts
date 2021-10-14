import { Schema, Model, model } from "mongoose";
import { User } from "../interfaces/User";

const userSchema = new Schema<User, Model<User>, User>({
  nome: String,
  email: String,
  password: String,
});

const User = model<User>("User", userSchema);

export { User };
