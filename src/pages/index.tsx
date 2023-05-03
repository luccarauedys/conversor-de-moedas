import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${roboto.className} min-h-screen flex flex-col`}>
      <div className="background">
        <div className="header"></div>

        <div className="container w-[90%]">
          <h1>Conversor de moedas</h1>
        </div>
      </div>
    </main>
  );
}
