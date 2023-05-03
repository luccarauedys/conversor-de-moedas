import Link from "next/link";

import { CurrencyDollar } from "@phosphor-icons/react";

export default function MenuDesktop() {
  return (
    <div className="flex justify-between items-center text-white h-[80px] px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="uppercase font-semibold text-2xl">
          <CurrencyDollar size={40} weight="bold" />
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="" className="hover:scale-105 duration-300">
            Home
          </Link>
          <Link href="" className="hover:scale-105 duration-300">
            Ferramentas
          </Link>
          <Link href="" className="hover:scale-105 duration-300">
            Recursos
          </Link>
        </nav>

        <button className="primary-button">Baixe o aplicativo</button>
      </div>
    </div>
  );
}
