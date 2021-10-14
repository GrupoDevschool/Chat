import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  nome: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;