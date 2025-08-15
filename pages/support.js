
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Contact Support | HYPEPAD</title><meta name='description' content='Reach the HYPEPAD team.'/><link rel='canonical' href='https://www.hypepad.app/support'/><meta property='og:title' content='Contact Support | HYPEPAD'/><meta property='og:description' content='Reach the HYPEPAD team.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/support'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Contact Support | HYPEPAD'/><meta name='twitter:description' content='Reach the HYPEPAD team.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Contact Support</h1>
        <p className="hero-sub">Reach the HYPEPAD team.</p>
      </main>
      <Footer />
    </>
  );
}
