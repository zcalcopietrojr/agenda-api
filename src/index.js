import express from "express";
import {
  selectAll,
  selectById,
  insert,
  update,
  _delete,
} from "./contatos-dao.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("try GET /contatos");
});

app.listen(port, () => {
  console.log(`agenda-api is listening on port ${port}`);
});
