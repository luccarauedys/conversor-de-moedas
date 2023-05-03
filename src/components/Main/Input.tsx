export default function Input() {
  return (
    <div className="w-full">
      <input
        id="amount"
        type="number"
        placeholder={"1.00"}
        className="w-full h-[50px] p-4 rounded-md bg-white border-[1px] border-[#bababa] shadow-sm outline-none focus:border-blue-500"
      />
    </div>
  );
}
