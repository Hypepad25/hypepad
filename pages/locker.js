
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Token & LP Locker | HYPEPAD</title><meta name='description' content='Lock tokens and LP for trust.'/><link rel='canonical' href='https://www.hypepad.app/locker'/><meta property='og:title' content='Token & LP Locker | HYPEPAD'/><meta property='og:description' content='Lock tokens and LP for trust.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/locker'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Token & LP Locker | HYPEPAD'/><meta name='twitter:description' content='Lock tokens and LP for trust.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Token & LP Locker</h1>
        <p className="hero-sub">Lock tokens and LP for trust.</p>
      </main>
      <Footer />
    </>
  );
}
