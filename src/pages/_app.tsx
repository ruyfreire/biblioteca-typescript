import "@/styles/globals.css";
import { Layout } from "@/templates";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Site de biblioteca Ruy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
