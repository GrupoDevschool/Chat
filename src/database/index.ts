import mongoose from "mongoose";

mongoose
  .connect("mongodb://root:root@localhost:27017/chat")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
