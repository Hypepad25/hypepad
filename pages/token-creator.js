
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Token Creator | HYPEPAD</title><meta name='description' content='Deploy tokens on EVM & Solana with advanced options.'/><link rel='canonical' href='https://www.hypepad.app/token-creator'/><meta property='og:title' content='Token Creator | HYPEPAD'/><meta property='og:description' content='Deploy tokens on EVM & Solana with advanced options.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/token-creator'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Token Creator | HYPEPAD'/><meta name='twitter:description' content='Deploy tokens on EVM & Solana with advanced options.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Token Creator</h1>
        <p className="hero-sub">Deploy tokens on EVM & Solana with advanced options.</p>
      </main>
      <Footer />
    </>
  );
}
