import { createConnection } from "typeorm";

createConnection({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "test",
  username: "root",
  password: "baltaio",
})
  .then(() => console.log(""))
  .catch((error) => console.log(error));
