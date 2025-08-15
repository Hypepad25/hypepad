
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home(){
  return (
    <>
      <Head>
        <title>HYPEPAD | Fuel Your Launch. Rule the Hype.</title><meta name='description' content='Multi-chain crypto launchpad for presales, IDOs, meme coins, token creation, staking, and security tools.'/><link rel='canonical' href='https://www.hypepad.app/'/><meta property='og:title' content='HYPEPAD | Fuel Your Launch. Rule the Hype.'/><meta property='og:description' content='Multi-chain crypto launchpad for presales, IDOs, meme coins, token creation, staking, and security tools.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='HYPEPAD | Fuel Your Launch. Rule the Hype.'/><meta name='twitter:description' content='Multi-chain crypto launchpad for presales, IDOs, meme coins, token creation, staking, and security tools.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <section className="hero container">
        <img src="/hypepad-banner.jpg" alt="HYPEPAD Banner" />
        <h1 className="hero-title">Fuel Your Launch. Rule the Hype.</h1>
        <p className="hero-sub">The Future of Web3 Starts Here</p>
        <div className="cta">
          <a className="btn" href="/meme-launcher">Instant Meme Launch</a>
          <a className="btn ml" href="/presale">Start a Presale</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
