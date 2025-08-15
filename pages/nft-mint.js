
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>NFT Mint Tool | HYPEPAD</title><meta name='description' content='Launch and mint NFT collections.'/><link rel='canonical' href='https://www.hypepad.app/nft-mint'/><meta property='og:title' content='NFT Mint Tool | HYPEPAD'/><meta property='og:description' content='Launch and mint NFT collections.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/nft-mint'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='NFT Mint Tool | HYPEPAD'/><meta name='twitter:description' content='Launch and mint NFT collections.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>NFT Mint Tool</h1>
        <p className="hero-sub">Launch and mint NFT collections.</p>
      </main>
      <Footer />
    </>
  );
}
