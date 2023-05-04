import { ReactNode } from "react";

type InputContainerProps = {
  text: string;
  children: ReactNode;
};

export default function InputContainer({
  text,
  children,
}: InputContainerProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="amount" className="font-medium w-full text-[#333]">
        {text}
      </label>
      {children}
    </div>
  );
}
