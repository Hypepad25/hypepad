
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Trending & Leaderboard | HYPEPAD</title><meta name='description' content='Live trending tokens and boosts.'/><link rel='canonical' href='https://www.hypepad.app/leaderboard'/><meta property='og:title' content='Trending & Leaderboard | HYPEPAD'/><meta property='og:description' content='Live trending tokens and boosts.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/leaderboard'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="container">
      <h1>Trending & Leaderboard</h1>
      <p className="hero-sub">Live trending tokens and boosts.</p>
    </main>
    <Footer />
  </>);
}
