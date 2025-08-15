
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Head>
        <title>Bundle Launches | HYPEPAD</title><meta name='description' content='Package multiple launch actions.'/><link rel='canonical' href='https://www.hypepad.app/bundle-launch'/><meta property='og:title' content='Bundle Launches | HYPEPAD'/><meta property='og:description' content='Package multiple launch actions.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/bundle-launch'/><meta property='og:image' content='/hypepad-banner.jpg'/><meta name='twitter:card' content='summary_large_image'/><meta name='twitter:title' content='Bundle Launches | HYPEPAD'/><meta name='twitter:description' content='Package multiple launch actions.'/><meta name='twitter:image' content='/hypepad-banner.jpg'/>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Bundle Launches</h1>
        <p className="hero-sub">Package multiple launch actions.</p>
      </main>
      <Footer />
    </>
  );
}
