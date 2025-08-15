
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Home(){
  return (<>
    <Head><title>HYPEPAD | Fuel Your Launch. Rule the Hype.</title><meta name='description' content='Multi-chain launchpad for presales, IDOs, meme coins, tokens, staking, and tools.'/><link rel='canonical' href='https://www.hypepad.app/'/><meta property='og:title' content='HYPEPAD | Fuel Your Launch. Rule the Hype.'/><meta property='og:description' content='Multi-chain launchpad for presales, IDOs, meme coins, tokens, staking, and tools.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <section className="hero">
      <div className="container">
        <div className="frame">
          <h1>HYPEPAD</h1>
          <p>Fuel Your Launch. Rule the Hype.</p>
        </div>
        <div style={{marginTop:'1.25rem'}}>
          <a className="btn" href="/meme-launcher">Instant Meme Launch</a>
          <a className="btn" style={{marginLeft:'.75rem'}} href="/presale">Start a Presale</a>
        </div>
      </div>
    </section>
    <Footer />
  </>);
}
