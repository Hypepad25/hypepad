
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Meme Coin Launcher | HYPEPAD</title><meta name='description' content='Launch instantly with bonding curves.'/><link rel='canonical' href='https://www.hypepad.app/meme-launcher'/><meta property='og:title' content='Meme Coin Launcher | HYPEPAD'/><meta property='og:description' content='Launch instantly with bonding curves.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/meme-launcher'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="container">
      <h1>Meme Coin Launcher</h1>
      <p className="hero-sub">Launch instantly with bonding curves.</p>
    </main>
    <Footer />
  </>);
}
