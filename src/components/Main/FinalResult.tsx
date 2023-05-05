import { useContext } from "react";
import { CurrencyContext } from "@/contexts/CurrencyContext";

export default function FinalResult() {
  const { convertedValue, amount, fromCurrency, toCurrency } =
    useContext(CurrencyContext);

  const fromCurrencyCode = fromCurrency.split("-")[0].trim().toUpperCase();
  const toCurrencyCode = toCurrency.split("-")[0].trim().toUpperCase();

  return (
    <div className="grid grid-cols-1 gap-2 mt-8 place-items-center">
      <p className="font-medium">
        {amount} {fromCurrencyCode} =
      </p>
      <h3 className="text-blue-600 text-3xl">
        {convertedValue.toFixed(2)} {toCurrencyCode}
      </h3>
    </div>
  );
}
