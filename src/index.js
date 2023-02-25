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

app.get("/contatos", (_, res) => {
  const contatos = selectAll();
  return res.status(200).send(contatos);
});

app.get("/contatos/:id", (req, res) => {
  const { id } = req.params;

  const contato = selectById(id);
  if (contato) {
    return res.status(200).send(contato);
  }

  return res.status(404).end();
});

app.post("/contatos", (req, res) => {
  const { body: contato } = req;
  const id = insert(contato);
  res.status(200).send({ id });
});

app.put("/contatos/:id", (req, res) => {
  const { id } = req.params;
  const { body: contato } = req;

  const rowsAffected = update(id, contato);
  if (rowsAffected) {
    return res.status(200).send({ rowsAffected });
  }

  return res.status(404).end();
});

app.delete("/contatos/:id", (req, res) => {
  const { id } = req.params;

  const rowsAffected = _delete(id);
  if (rowsAffected) {
    return res.status(200).send({ rowsAffected });
  }

  return res.status(404).end();
});

app.listen(port, () => {
  console.log(`agenda-api is listening on port ${port}`);
});
