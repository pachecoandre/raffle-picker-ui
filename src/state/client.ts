import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/v1",
  headers: { Authorization: `Bearer 1` },
});

const getCampaigns = async () => {
  const { data } = await client.get("/campaigns");
  return data;
};

const getCampaign = async (campaignId: string = "") => {
  const { data } = await client.get(`/campaigns/${campaignId}`);
  return data;
};

const allRaffles = [
  createRaffle("Anastácio", "48998456546"),
  createRaffle("João", "11988451321"),
  createRaffle("Reginaldo", "48998456546"),
  createRaffle("Horácia", "11988451321"),
  createRaffle("Erivaldo", "48998456546"),
  createRaffle("Godofreda", "11988451321"),
  createRaffle("Marquinhos", "48998456546"),
  createRaffle("Alfredo", "11988451321"),
  createRaffle("Heraldo", "48998456546"),
  createRaffle("Gertrudes", "11988451321"),
  createRaffle("Gorete", "48998456546"),
  createRaffle("Edemar", "11988451321"),
  createRaffle("Janete", "48998456546"),
  createRaffle("Erismar", "11988451321"),
  createRaffle("Maria", "48998456546"),
  createRaffle("João", "11988451321"),
  createRaffle("Mafalda", "48998456546"),
  createRaffle("Joacir", "11988451321"),
];

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

function createRaffle(name: string, sales: string) {
  return { name, sales };
}

function createPrize(name: string, sales: number) {
  return { name, sales };
}

const getRaffles = (limit: number, page: number) => {
  return {
    totalRows: allRaffles.length,
    data: allRaffles.slice(page * limit, page * limit + limit),
  };
};

const getPrizes = (limit: number, page: number) => {
  return {
    totalRows: allPrizes.length,
    data: allPrizes.slice(page * limit, page * limit + limit),
  };
};

const getSellers = getRaffles;

export { getCampaign, getCampaigns, getRaffles, getPrizes, getSellers };
