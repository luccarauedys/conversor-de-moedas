import Link from "next/link";
import { useState } from "react";
import { CurrencyDollar, List, X } from "@phosphor-icons/react";

export default function MenuMobile() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const links = [
    { href: "", title: "Home" },
    { href: "", title: "Ferramentas" },
    { href: "", title: "Recursos" },
    { href: "", title: "Baixe o APP", highlight: true },
  ];

  const renderLinks = () => {
    return links.map((link) => {
      if (link.highlight) {
        return (
          <Link
            key={link.title}
            href={link.href}
            className="primary-button bg-blue-600 hover:bg-blue-700  w-[180px] text-center mx-auto"
          >
            {link.title}
          </Link>
        );
      }

      return (
        <Link
          key={link.title}
          href={link.href}
          className="uppercase text-base font-medium text-center hover:scale-105 duration-300"
        >
          {link.title}
        </Link>
      );
    });
  };

  return (
    <div className="container flex justify-between text-white p-6">
      <Link href="/" className="uppercase text-xl font-semibold">
        <CurrencyDollar size={30} weight="bold" />
      </Link>
      <List
        weight="bold"
        onClick={() => setMenuIsOpen(true)}
        className="text-3xl cursor-pointer hover:scale-110 duration-500"
      />
      {menuIsOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-white text-black bg-opacity-95">
          <X
            onClick={() => setMenuIsOpen(false)}
            weight="bold"
            className="absolute top-6 right-6 text-3xl cursor-pointer hover:scale-110 duration-500"
          />
          <div className="grid grid-cols-1 mt-24 gap-8 max-w-[80%] mx-auto">
            {renderLinks()}
          </div>
        </div>
      )}
    </div>
  );
}
