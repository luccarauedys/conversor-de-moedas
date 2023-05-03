import FormContainer from "./FormContainer";

export default function Main() {
  return (
    <main className="container w-[90%] grid grid-cols-1 gap-8">
      <div className="text-white text-center">
        <h1 className="mb-2">Conversor de moedas</h1>
        <p>
          Bem-vindo à ferramenta de moedas e taxas de câmbio mais confiável do
          mundo.
        </p>
      </div>
      <FormContainer />
    </main>
  );
}
