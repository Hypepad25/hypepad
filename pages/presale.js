
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Presales / IDO | HYPEPAD</title><meta name='description' content='Low-fee presales with KYC/SAFU.'/><link rel='canonical' href='https://www.hypepad.app/presale'/><meta property='og:title' content='Presales / IDO | HYPEPAD'/><meta property='og:description' content='Low-fee presales with KYC/SAFU.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/presale'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Presales / IDO</h1>
        <p style={{color:'#a9abc0'}}>Low-fee presales with KYC/SAFU.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
