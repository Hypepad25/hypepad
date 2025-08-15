
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Gas Tracker | HYPEPAD</title><meta name='description' content='Monitor chain gas prices.'/><link rel='canonical' href='https://www.hypepad.app/gas-tracker'/><meta property='og:title' content='Gas Tracker | HYPEPAD'/><meta property='og:description' content='Monitor chain gas prices.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/gas-tracker'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Gas Tracker | HYPEPAD'/><meta name='twitter:description' content='Monitor chain gas prices.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Gas Tracker</h1>
        <p className="hero-sub">Monitor chain gas prices.</p>
      </main>
      <Footer />
    </>
  );
}
