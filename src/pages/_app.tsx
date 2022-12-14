import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  const description =
    "We're here to answer the eternal question: Which Pokémon is the roundest of them all?";
  const title = "Roundest Pokémon - Public Poll";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/pika.png" />
        <meta property="og:image" content="/pika.png" />
        <meta name="twitter:image" content="/pika.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default trpc.withTRPC(MyApp);
