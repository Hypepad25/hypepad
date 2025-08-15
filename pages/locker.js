
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Token & LP Locker | HYPEPAD</title><meta name='description' content='Lock tokens & LP for trust.'/><link rel='canonical' href='https://www.hypepad.app/locker'/><meta property='og:title' content='Token & LP Locker | HYPEPAD'/><meta property='og:description' content='Lock tokens & LP for trust.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/locker'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Token & LP Locker</h1>
        <p style={{color:'#a9abc0'}}>Lock tokens & LP for trust.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
