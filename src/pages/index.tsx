import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${roboto.className} min-h-screen flex flex-col`}>
      <div className="background flex flex-col gap-4 md:gap-8">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
