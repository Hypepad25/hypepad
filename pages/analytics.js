
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Token Analytics | HYPEPAD</title><meta name='description' content='Charts and metrics for tokens.'/><link rel='canonical' href='https://www.hypepad.app/analytics'/><meta property='og:title' content='Token Analytics | HYPEPAD'/><meta property='og:description' content='Charts and metrics for tokens.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/analytics'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Token Analytics | HYPEPAD'/><meta name='twitter:description' content='Charts and metrics for tokens.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Token Analytics</h1>
        <p className="hero-sub">Charts and metrics for tokens.</p>
      </main>
      <Footer />
    </>
  );
}
