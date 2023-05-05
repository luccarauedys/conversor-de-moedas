import { ReactNode, createContext, useEffect, useState } from "react";
import { Currency } from "@/models";
import { getAllCurrencies } from "@/services/api";

type Props = {
  children: ReactNode;
};

type CurrencyContextType = {
  currencies: Currency;
  setCurrencies: React.Dispatch<React.SetStateAction<Currency>>;
  fromCurrency: string;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  convertedValue: number;
  setConvertedValue: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValue = {
  currencies: {},
  setCurrencies: () => null,
  fromCurrency: "brl - Brazilian real",
  setFromCurrency: () => null,
  toCurrency: "usd - United States dollar",
  setToCurrency: () => null,
  setCurrencyPair: () => null,
  amount: 0,
  setAmount: () => null,
  convertedValue: 0,
  setConvertedValue: () => null,
};

export const CurrencyContext = createContext<CurrencyContextType>(defaultValue);

export const CurrencyProvider = ({ children }: Props) => {
  const [currencies, setCurrencies] = useState<Currency>({});
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>(
    "brl - Brazilian real"
  );
  const [toCurrency, setToCurrency] = useState<string>(
    "usd - United States dollar"
  );
  const [convertedValue, setConvertedValue] = useState<number>(0);

  const value = {
    currencies,
    setCurrencies,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedValue,
    setConvertedValue,
  };

  useEffect(() => {
    const getCurrencies = async () => {
      const data = await getAllCurrencies();
      setCurrencies(data);
    };

    getCurrencies();
  }, []);

  console.log(currencies);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
