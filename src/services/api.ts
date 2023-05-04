import { Currency } from "@/models";

export async function getAllCurrencies(): Promise<Currency> {
  const URL = `${process.env.API_URL}/latest/currencies.json`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
}

export async function getCurrencyComparison(c1: string, c2: string) {
  const URL = `${process.env.API_URL}/latest/currencies/${c1}/${c2}.json`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
}
