function createData(name: string, sales: number) {
  return { name, sales };
}

const allRecords = [
  createData("Anastácio", 159),
  createData("João", 237),
  createData("Reginaldo", 262),
  createData("Horácia", 305),
  createData("Erivaldo", 356),
  createData("Godofreda", 160),
  createData("Marquinhos", 238),
  createData("Alfredo", 263),
  createData("Heraldo", 306),
  createData("Gertrudes", 357),
  createData("Gorete", 159),
  createData("Edemar", 237),
  createData("Janete", 262),
  createData("Erismar", 305),
  createData("Maria", 356),
  createData("João", 160),
  createData("Mafalda", 238),
  createData("Joacir", 263),
];

const getSellers = (limit: number, page: number) => {
  return {
    totalRows: allRecords.length,
    data: allRecords.slice(page * limit, page * limit + limit),
  };
};

export { getSellers };
