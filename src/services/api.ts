import { Currency } from "@/models";

const API_BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest";

export async function getAllCurrencies(): Promise<Currency> {
  const URL = `${API_BASE_URL}/latest/currencies.json`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
}

export async function getCurrencyComparison(
  fromCurrencyCode: string,
  toCurrencyCode: string
) {
  const URL = `${API_BASE_URL}/latest/currencies/${fromCurrencyCode}/${toCurrencyCode}.json`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
}
