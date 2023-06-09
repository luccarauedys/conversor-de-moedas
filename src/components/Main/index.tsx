import FormContainer from "./FormContainer";

export default function Main() {
  return (
    <main className="container grid grid-cols-1 gap-8 pb-28">
      <div className="text-white text-center sm:mt-4">
        <h1 className="mb-2">Conversor de moedas</h1>
        <p>Bem-vindo à ferramenta mais precisa de conversão de moedas.</p>
      </div>
      <div className="container max-w-[800px] sm:mt-8">
        <FormContainer />
      </div>
    </main>
  );
}
