
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Support / FAQ | HYPEPAD</title><meta name='description' content='Answers to fees, locks, verification, and security.'/><link rel='canonical' href='https://www.hypepad.app/faq'/><meta property='og:title' content='Support / FAQ | HYPEPAD'/><meta property='og:description' content='Answers to fees, locks, verification, and security.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/faq'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Support / FAQ | HYPEPAD'/><meta name='twitter:description' content='Answers to fees, locks, verification, and security.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Support / FAQ</h1>
        <p className="hero-sub">Answers to fees, locks, verification, and security.</p>
      </main>
      <Footer />
    </>
  );
}
