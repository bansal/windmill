import "@/styles/globals.css";
import { Inter, Syne } from "next/font/google";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
    >
      <Component {...pageProps} />
    </main>
  );
}
