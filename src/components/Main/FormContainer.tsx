import { ArrowsDownUp } from "@phosphor-icons/react";

import InputContainer from "./InputContainer";
import Select from "./Select";

export default function FormContainer() {
  return (
    <div className="container bg-white p-8 rounded-md shadow-md">
      <div className="grid grid-cols-1 gap-4">
        <InputContainer text="Valor">
          <input
            id="amount"
            type="number"
            placeholder={"1.00"}
            className="w-full h-[50px] p-4 rounded-md bg-white border-[1px] border-[#bababa] shadow-sm"
          />
        </InputContainer>

        <InputContainer text="De">
          <Select currencies={{ a: "b", c: "d" }} />
        </InputContainer>

        <button className="bg-blue-600 hover:bg-blue-800 rounded-full p-2 place-self-center text-white duration-500">
          <ArrowsDownUp size={28} weight="fill" />
        </button>

        <InputContainer text="Para">
          <Select currencies={{ a: "b", c: "d" }} />
        </InputContainer>

        <button className="primary-button bg-blue-600 hover:bg-blue-800 duration-500">
          Converter
        </button>
      </div>
    </div>
  );
}
