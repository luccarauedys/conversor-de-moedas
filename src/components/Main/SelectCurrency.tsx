import { Currency } from "@/models";

type SelectCurrencyProps = {
  id: string;
  options: Currency;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectCurrency(props: SelectCurrencyProps) {
  const { id, options, value, setValue } = props;

  return (
    <select
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="px-4 rounded-md h-[50px] bg-white border-[1px] border-[#bababa] shadow-sm"
    >
      {options &&
        Object.entries(options).map((option) => (
          <option key={option[0]} value={option[0]}>
            {option[0]} - {option[1]}
          </option>
        ))}
    </select>
  );
}
