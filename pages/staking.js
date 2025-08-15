
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Staking Dashboard | HYPEPAD</title><meta name='description' content='Stake and earn across tiers.'/><link rel='canonical' href='https://www.hypepad.app/staking'/><meta property='og:title' content='Staking Dashboard | HYPEPAD'/><meta property='og:description' content='Stake and earn across tiers.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/staking'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Staking Dashboard</h1>
        <p style={{color:'#a9abc0'}}>Stake and earn across tiers.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
