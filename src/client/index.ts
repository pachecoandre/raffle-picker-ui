import axios from "axios";
import { PrizesResult } from "../pages/Prizes/types";
import { RafflesResult } from "../pages/Raffles/types";
import { RafflePayload } from "../pages/NewRaffle/types";
import { PrizePayload } from "pages/NewPrize/types";
import { CampaignPayload } from "pages/NewCampaign/types";

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

const createCampaign = async (payload: CampaignPayload) => {
  await client.post("/campaigns", payload);
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

const createRaffles = async (campaignId: string, payload: RafflePayload) => {
  await client.post(`/campaigns/${campaignId}/raffles`, payload);
};

const deleteRaffle = async (campaignId: string, id: number) => {
  await client.delete(`/campaigns/${campaignId}/raffles/${id}`);
};

const getPrizes = async (
  campaignId: string,
  page: number,
  limit: number
): Promise<PrizesResult> => {
  const { data } = await client.get(
    `/campaigns/${campaignId}/prizes?page=${page}&limit=${limit}`
  );
  return data;
};

const createPrize = async (campaignId: string, payload: PrizePayload) => {
  await client.post(`/campaigns/${campaignId}/prizes`, payload);
};

const deletePrize = async (campaignId: string, prizeId: number) => {
  await client.delete(`/campaigns/${campaignId}/prizes/${prizeId}`);
};

const getSellers = getRaffles;

export {
  getCampaign,
  getCampaigns,
  createCampaign,
  getRaffles,
  createRaffles,
  deleteRaffle,
  getPrizes,
  createPrize,
  deletePrize,
  getSellers,
};
