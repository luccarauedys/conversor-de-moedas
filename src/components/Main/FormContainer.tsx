import { useContext } from "react";
import { CurrencyContext } from "@/contexts/CurrencyContext";
import { getCurrencyComparison } from "@/services/api";
import InputContainer from "./InputContainer";
import { ArrowsDownUp } from "@phosphor-icons/react";
import SelectCurrency from "./SelectCurrency";
import FinalResult from "./FinalResult";

export default function FormContainer() {
  const {
    currencies,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedValue,
    setConvertedValue,
  } = useContext(CurrencyContext);

  const fromCurrencyCode = fromCurrency.split("-")[0].trim();
  const toCurrencyCode = toCurrency.split("-")[0].trim();

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedValue(0);
  };

  const handleConvertValue = async () => {
    const data = await getCurrencyComparison(fromCurrencyCode, toCurrencyCode);
    const exchangeRate = data[`${toCurrencyCode}`];
    const finalResult = amount * exchangeRate;
    setConvertedValue(finalResult);
  };

  return (
    <div className="container bg-white p-8 rounded-md shadow-md">
      <div className="grid grid-cols-1 gap-4">
        <InputContainer text="Valor">
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(parseFloat(e.target.value));
              setConvertedValue(0);
            }}
            className="w-full h-[50px] p-4 rounded-md bg-white border-[1px] border-[#bababa] shadow-sm"
          />
        </InputContainer>

        <InputContainer text="De">
          <SelectCurrency
            id="fromCurrency"
            options={currencies}
            value={fromCurrencyCode}
            setValue={setFromCurrency}
          />
        </InputContainer>

        <button
          className="bg-blue-600 hover:bg-blue-800 rounded-full p-2 place-self-center text-white duration-500"
          onClick={handleSwapCurrencies}
        >
          <ArrowsDownUp size={28} weight="fill" />
        </button>

        <InputContainer text="Para">
          <SelectCurrency
            id="toCurrency"
            options={currencies}
            value={toCurrencyCode}
            setValue={setToCurrency}
          />
        </InputContainer>

        <button
          onClick={handleConvertValue}
          className="primary-button bg-blue-600 hover:bg-blue-800 duration-500"
        >
          Converter
        </button>

        {convertedValue ? <FinalResult /> : ""}
      </div>
    </div>
  );
}
