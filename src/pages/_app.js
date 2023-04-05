import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/stores/stores";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </div>
  );
}
