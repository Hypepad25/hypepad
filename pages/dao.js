
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>DAO Voting Builder | HYPEPAD</title><meta name='description' content='Create on-chain proposals.'/><link rel='canonical' href='https://www.hypepad.app/dao'/><meta property='og:title' content='DAO Voting Builder | HYPEPAD'/><meta property='og:description' content='Create on-chain proposals.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/dao'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='DAO Voting Builder | HYPEPAD'/><meta name='twitter:description' content='Create on-chain proposals.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>DAO Voting Builder</h1>
        <p className="hero-sub">Create on-chain proposals.</p>
      </main>
      <Footer />
    </>
  );
}
