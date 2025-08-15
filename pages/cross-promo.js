
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Cross-Promo Marketplace | HYPEPAD</title><meta name='description' content='Trade promo placements.'/><link rel='canonical' href='https://www.hypepad.app/cross-promo'/><meta property='og:title' content='Cross-Promo Marketplace | HYPEPAD'/><meta property='og:description' content='Trade promo placements.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/cross-promo'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Cross-Promo Marketplace</h1>
        <p style={{color:'#a9abc0'}}>Trade promo placements.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
