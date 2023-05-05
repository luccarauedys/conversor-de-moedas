import { CurrencyProvider } from "@/contexts/CurrencyContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrencyProvider>
      <Component {...pageProps} />
    </CurrencyProvider>
  );
}
