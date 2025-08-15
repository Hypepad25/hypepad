
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Paid Advertising | HYPEPAD</title><meta name='description' content='Buy banner slots & boosts.'/><link rel='canonical' href='https://www.hypepad.app/ads'/><meta property='og:title' content='Paid Advertising | HYPEPAD'/><meta property='og:description' content='Buy banner slots & boosts.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/ads'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Paid Advertising</h1>
        <p style={{color:'#a9abc0'}}>Buy banner slots & boosts.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
