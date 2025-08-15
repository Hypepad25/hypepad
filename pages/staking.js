
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Staking Dashboard | HYPEPAD</title><meta name='description' content='Tiered APYs and reward tracking.'/><link rel='canonical' href='https://www.hypepad.app/staking'/><meta property='og:title' content='Staking Dashboard | HYPEPAD'/><meta property='og:description' content='Tiered APYs and reward tracking.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/staking'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Staking Dashboard | HYPEPAD'/><meta name='twitter:description' content='Tiered APYs and reward tracking.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Staking Dashboard</h1>
        <p className="hero-sub">Tiered APYs and reward tracking.</p>
      </main>
      <Footer />
    </>
  );
}
