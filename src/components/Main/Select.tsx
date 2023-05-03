import { Currency } from "@/models";

type SelectProps = {
  currencies: Currency | null;
};

export default function Select({ currencies }: SelectProps) {
  return (
    <select className="container rounded-md h-[50px] bg-white border-[1px] border-[#bababa] shadow-sm">
      {currencies &&
        Object.keys(currencies).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
    </select>
  );
}
