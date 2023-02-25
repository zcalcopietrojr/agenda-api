import Database from "better-sqlite3";

const db = new Database("agenda.db");

db.exec(
  "CREATE TABLE IF NOT EXISTS tb_contatos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, grupo TEXT)"
);

export const selectAll = () => {
  const stmt = db.prepare(
    "SELECT id, nome, email, telefone, grupo FROM tb_contatos"
  );
  return stmt.all();
};

export const selectById = (id) => {
  const stmt = db.prepare(
    "SELECT id, nome, email, telefone, grupo FROM tb_contatos where id = ?"
  );
  return stmt.get(id);
};

export const insert = (contato) => {
  const { nome, email, telefone, grupo } = contato;

  const stmt = db.prepare(
    "INSERT INTO tb_contatos (nome, email, telefone, grupo) VALUES(?, ?, ?, ?)"
  );
  const { lastInsertRowid } = stmt.run(nome, email, telefone, grupo);

  return lastInsertRowid;
};

export const update = (id, contato) => {
  const { nome, email, telefone, grupo } = contato;

  const stmt = db.prepare(
    "UPDATE tb_contatos SET nome = ?, email = ?, telefone = ?, grupo = ? WHERE id = ?"
  );
  const { changes } = stmt.run(nome, email, telefone, grupo, id);

  return changes;
};

export const _delete = (id) => {
  const stmt = db.prepare("DELETE FROM tb_contatos WHERE id = ?");
  const { changes } = stmt.run(id);

  return changes;
};
