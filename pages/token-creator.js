
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Token Creator | HYPEPAD</title><meta name='description' content='Create tokens on EVM & Solana.'/><link rel='canonical' href='https://www.hypepad.app/token-creator'/><meta property='og:title' content='Token Creator | HYPEPAD'/><meta property='og:description' content='Create tokens on EVM & Solana.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/token-creator'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Token Creator</h1>
        <p style={{color:'#a9abc0'}}>Create tokens on EVM & Solana.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
