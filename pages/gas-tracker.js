
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Gas Tracker | HYPEPAD</title><meta name='description' content='Monitor gas prices.'/><link rel='canonical' href='https://www.hypepad.app/gas-tracker'/><meta property='og:title' content='Gas Tracker | HYPEPAD'/><meta property='og:description' content='Monitor gas prices.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/gas-tracker'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Gas Tracker</h1>
        <p style={{color:'#a9abc0'}}>Monitor gas prices.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
