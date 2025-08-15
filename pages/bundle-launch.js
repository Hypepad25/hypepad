
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Bundle Launches | HYPEPAD</title><meta name='description' content='Group launch actions together.'/><link rel='canonical' href='https://www.hypepad.app/bundle-launch'/><meta property='og:title' content='Bundle Launches | HYPEPAD'/><meta property='og:description' content='Group launch actions together.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/bundle-launch'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="section">
      <div className="container">
        <h1>Bundle Launches</h1>
        <p style={{color:'#a9abc0'}}>Group launch actions together.</p>
        <div className="card" style={{marginTop:'1rem'}}>Content coming soon.</div>
      </div>
    </main>
    <Footer />
  </>);
}
