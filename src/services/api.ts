import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getStocks = async () => {
  const response = await axios.get(`${BASE_URL}/stocks`);
  return response.data.stocks;
};

export const getStockPrices = async (ticker: string, minutes?: number) => {
  const url = minutes ? `/stocks/${ticker}?minutes=${minutes}` : `/stocks/${ticker}`;
  const response = await api.get(url);
  return response.data;
};
