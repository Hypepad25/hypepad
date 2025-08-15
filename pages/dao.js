
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>DAO Voting Builder | HYPEPAD</title><meta name='description' content='Create on-chain proposals.'/><link rel='canonical' href='https://www.hypepad.app/dao'/><meta property='og:title' content='DAO Voting Builder | HYPEPAD'/><meta property='og:description' content='Create on-chain proposals.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/dao'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>DAO Voting Builder</h1>
        <p style={{color:'#a9abc0'}}>Create on-chain proposals.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
