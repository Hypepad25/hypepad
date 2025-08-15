
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Airdrop Distributor | HYPEPAD</title><meta name='description' content='Distribute tokens to holders.'/><link rel='canonical' href='https://www.hypepad.app/airdrop'/><meta property='og:title' content='Airdrop Distributor | HYPEPAD'/><meta property='og:description' content='Distribute tokens to holders.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/airdrop'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Airdrop Distributor</h1>
        <p style={{color:'#a9abc0'}}>Distribute tokens to holders.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
