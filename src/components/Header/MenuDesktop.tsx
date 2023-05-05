import Link from "next/link";
import { CurrencyDollar } from "@phosphor-icons/react";

export default function MenuDesktop() {
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
          <Link key={link.title} href={link.href} className="primary-button">
            {link.title}
          </Link>
        );
      }

      return (
        <Link
          key={link.title}
          href={link.href}
          className="hover:scale-105 duration-300"
        >
          {link.title}
        </Link>
      );
    });
  };

  return (
    <div className="flex justify-between items-center text-white h-[80px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="uppercase font-semibold text-2xl">
          <CurrencyDollar size={40} weight="bold" />
        </Link>
        <nav className="flex items-center gap-8">{renderLinks()}</nav>
      </div>
    </div>
  );
}
