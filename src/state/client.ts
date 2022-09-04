import axios from "axios";
import { RafflesResult } from "../pages/Raffles/types";

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

const getRaffles = async (
  campaignId: string,
  page: number,
  limit: number
): Promise<RafflesResult> => {
  const { data } = await client.get(
    `/campaigns/${campaignId}/raffles?page=${page}&limit=${limit}`
  );
  return data;
};

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

function createPrize(name: string, sales: number) {
  return { name, sales };
}

const getPrizes = (limit: number, page: number) => {
  return {
    totalRows: allPrizes.length,
    data: allPrizes.slice(page * limit, page * limit + limit),
  };
};

const getSellers = getRaffles;

export { getCampaign, getCampaigns, getRaffles, getPrizes, getSellers };
