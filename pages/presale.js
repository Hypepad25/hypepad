
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Presales / IDO | HYPEPAD</title><meta name='description' content='Low-fee IDOs and presales with KYC/SAFU options and timelines.'/><link rel='canonical' href='https://www.hypepad.app/presale'/><meta property='og:title' content='Presales / IDO | HYPEPAD'/><meta property='og:description' content='Low-fee IDOs and presales with KYC/SAFU options and timelines.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/presale'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Presales / IDO | HYPEPAD'/><meta name='twitter:description' content='Low-fee IDOs and presales with KYC/SAFU options and timelines.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Presales / IDO</h1>
        <p className="hero-sub">Low-fee IDOs and presales with KYC/SAFU options and timelines.</p>
      </main>
      <Footer />
    </>
  );
}
