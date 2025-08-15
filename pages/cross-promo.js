
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Cross‑Promo Marketplace | HYPEPAD</title><meta name='description' content='Trade banner and social placements.'/><link rel='canonical' href='https://www.hypepad.app/cross-promo'/><meta property='og:title' content='Cross‑Promo Marketplace | HYPEPAD'/><meta property='og:description' content='Trade banner and social placements.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/cross-promo'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Cross‑Promo Marketplace | HYPEPAD'/><meta name='twitter:description' content='Trade banner and social placements.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Cross‑Promo Marketplace</h1>
        <p className="hero-sub">Trade banner and social placements.</p>
      </main>
      <Footer />
    </>
  );
}
