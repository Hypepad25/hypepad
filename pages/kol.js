
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Partner / KOL Program | HYPEPAD</title><meta name='description' content='Apply and manage referrals.'/><link rel='canonical' href='https://www.hypepad.app/kol'/><meta property='og:title' content='Partner / KOL Program | HYPEPAD'/><meta property='og:description' content='Apply and manage referrals.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/kol'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="container">
      <h1>Partner / KOL Program</h1>
      <p className="hero-sub">Apply and manage referrals.</p>
    </main>
    <Footer />
  </>);
}
