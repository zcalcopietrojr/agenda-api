import crypto from "crypto";

let contatos = [];

export const selectAll = () => contatos;

export const selectById = (id) =>
  contatos.filter((_contato) => _contato.id === id);

export const insert = (contato) => {
  const id = crypto.randomUUID();
  const newContato = {
    id,
    ...contato,
  };

  contatos.push(newContato);

  return id;
};

export const update = (id, contato) => {
  const currentIndexContato = contatos.findIndex(
    (_contato) => _contato.id === id
  );
  if (currentIndexContato === -1) {
    return 0;
  }

  const currentContato = contatos[currentIndexContato];
  const mergedContato = {
    ...currentContato,
    ...contato,
  };

  contatos[currentIndexContato] = mergedContato;

  return 1;
};

export const _delete = (id) => {
  const currentContato = contatos.find((_contato) => _contato.id === id);
  if (currentContato) {
    contatos = contatos.filter((_contato) => _contato.id !== id);
    return 1;
  }

  return 0;
};
