
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Whitepaper | HYPEPAD</title><meta name='description' content='Docs and tokenomics.'/><link rel='canonical' href='https://www.hypepad.app/whitepaper'/><meta property='og:title' content='Whitepaper | HYPEPAD'/><meta property='og:description' content='Docs and tokenomics.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/whitepaper'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Whitepaper | HYPEPAD'/><meta name='twitter:description' content='Docs and tokenomics.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Whitepaper</h1>
        <p className="hero-sub">Docs and tokenomics.</p>
      </main>
      <Footer />
    </>
  );
}
