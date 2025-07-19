import Head from "next/head";
import PageChild from "./PageChild";
import { Poppins, AR_One_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar-one-sans",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinity Mall </title>
        <meta name="description" content="Infinity Mall" />
        <link rel="canonical" href="https://infinitymall.com/" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
      </Head>

      <div className={`${poppins.variable} ${arOneSans.variable} relative`}>
        <PageChild />
      </div>
    </>
  );
}
