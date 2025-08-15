
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>AI Risk Scanner | HYPEPAD</title><meta name='description' content='Analyze contracts for risks.'/><link rel='canonical' href='https://www.hypepad.app/risk-scanner'/><meta property='og:title' content='AI Risk Scanner | HYPEPAD'/><meta property='og:description' content='Analyze contracts for risks.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/risk-scanner'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>AI Risk Scanner</h1>
        <p style={{color:'#a9abc0'}}>Analyze contracts for risks.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
