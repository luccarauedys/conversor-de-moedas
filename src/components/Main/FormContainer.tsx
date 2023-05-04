import { useEffect, useState } from "react";
import { ArrowsDownUp } from "@phosphor-icons/react";
import { Currency } from "@/models";
import { getAllCurrencies } from "@/services/api";
import InputContainer from "./InputContainer";

export default function FormContainer() {
  const [currencies, setCurrencies] = useState<Currency | null>(null);
  const [amount, setAmount] = useState("1,00");
  const [currencyPair, setCurrencyPair] = useState({
    c1: "brl - Brazilian real",
    c2: "usd - United States dollar",
  });

  const getCurrencies = async () => {
    const data = await getAllCurrencies();
    setCurrencies(data);
  };

  const handleSwapCurrencies = () => {
    const currency1 = currencyPair.c1;
    const currency2 = currencyPair.c2;
    setCurrencyPair({ c1: currency2, c2: currency1 });
  };

  const handleConvertValue = async () => {};

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="container bg-white p-8 rounded-md shadow-md">
      <div className="grid grid-cols-1 gap-4">
        <InputContainer text="Valor">
          <input
            id="amount"
            type="text"
            inputMode="decimal"
            className="w-full h-[50px] p-4 rounded-md bg-white border-[1px] border-[#bababa] shadow-sm"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </InputContainer>

        <InputContainer text="De">
          <select
            id="currency-1"
            className="px-4 rounded-md h-[50px] bg-white border-[1px] border-[#bababa] shadow-sm"
            onChange={(event) =>
              setCurrencyPair({ ...currencyPair, c1: event.target.value })
            }
          >
            {currencies &&
              Object.entries(currencies).map((c) => (
                <option
                  key={c[0]}
                  value={c[0]}
                  selected={c[0] === currencyPair.c1.split("-")[0].trim()}
                >
                  {c[0]} - {c[1]}
                </option>
              ))}
          </select>
        </InputContainer>

        <button
          className="bg-blue-600 hover:bg-blue-800 rounded-full p-2 place-self-center text-white duration-500"
          onClick={handleSwapCurrencies}
        >
          <ArrowsDownUp size={28} weight="fill" />
        </button>

        <InputContainer text="Para">
          <select
            id="currency-2"
            className="px-4 rounded-md h-[50px] bg-white border-[1px] border-[#bababa] shadow-sm"
            onChange={(event) =>
              setCurrencyPair({ ...currencyPair, c2: event.target.value })
            }
          >
            {currencies &&
              Object.entries(currencies).map((c) => (
                <option
                  key={c[0]}
                  value={c[0]}
                  selected={c[0] === currencyPair.c2.split("-")[0].trim()}
                >
                  {c[0]} - {c[1]}
                </option>
              ))}
          </select>
        </InputContainer>

        <button className="primary-button bg-blue-600 hover:bg-blue-800 duration-500">
          Converter
        </button>
      </div>
    </div>
  );
}
