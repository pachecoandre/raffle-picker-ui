import axios from "axios";
import { PrizesResult } from "../pages/Prizes/types";
import { RafflesResult } from "../pages/Raffles/types";
import { RafflePayload } from "../pages/NewRaffle/types";

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

const createRaffle = async (campaignId: string, payload: RafflePayload) => {
  await client.post(`/campaigns/${campaignId}/raffles`, payload);
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

const getSellers = getRaffles;

export {
  getCampaign,
  getCampaigns,
  getRaffles,
  createRaffle,
  getPrizes,
  getSellers,
};
