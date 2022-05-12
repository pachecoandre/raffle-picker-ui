function createSeller(name: string, sales: number) {
  return { name, sales };
}

const allSellers = [
  createSeller("Anastácio", 159),
  createSeller("João", 237),
  createSeller("Reginaldo", 262),
  createSeller("Horácia", 305),
  createSeller("Erivaldo", 356),
  createSeller("Godofreda", 160),
  createSeller("Marquinhos", 238),
  createSeller("Alfredo", 263),
  createSeller("Heraldo", 306),
  createSeller("Gertrudes", 357),
  createSeller("Gorete", 159),
  createSeller("Edemar", 237),
  createSeller("Janete", 262),
  createSeller("Erismar", 305),
  createSeller("Maria", 356),
  createSeller("João", 160),
  createSeller("Mafalda", 238),
  createSeller("Joacir", 263),
];

const getSellers = (limit: number, page: number) => {
  return {
    totalRows: allSellers.length,
    data: allSellers.slice(page * limit, page * limit + limit),
  };
};

function createPrize(name: string, sales: number) {
  return { name, sales };
}

const allPrizes = [
  createPrize("Bicicleta", 3),
  createPrize("Máquina de lavar", 1),
  createPrize("Carro Honda Fit", 1),
  createPrize("Voucher de restaurante", 20),
  createPrize("Bola de futebol", 2),
  createPrize("Geladeira", 2),
  createPrize("Passeio de asa delta", 10),
  createPrize("Camiseta do star wars", 5),
  createPrize("Vinho", 4),
  createPrize("Passeio de escuna", 10),
  createPrize("Corte de cabelo", 8),
];

const getPrizes = (limit: number, page: number) => {
  return {
    totalRows: allPrizes.length,
    data: allPrizes.slice(page * limit, page * limit + limit),
  };
};

export { getSellers, getPrizes };
