import express from "express";
import "./database";

const app = express();

app.listen(3000, () => console.log("Rodando na porta 3000"));
