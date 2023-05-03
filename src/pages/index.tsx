import Header from "@/components/Header";
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
        <Header />

        <div className="container w-[90%]"></div>
      </div>
    </main>
  );
}
