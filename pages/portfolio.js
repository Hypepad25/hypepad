
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Portfolio Tracker | HYPEPAD</title><meta name='description' content='Track your holdings.'/><link rel='canonical' href='https://www.hypepad.app/portfolio'/><meta property='og:title' content='Portfolio Tracker | HYPEPAD'/><meta property='og:description' content='Track your holdings.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/portfolio'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Portfolio Tracker</h1>
        <p style={{color:'#a9abc0'}}>Track your holdings.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
