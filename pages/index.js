
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home(){
  return (<>
    <Head><title>HYPEPAD | Launch Tokens, Presales & Meme Coins</title><meta name='description' content='Multi-chain launchpad with bonding curves, LP locks, KYC/SAFU, analytics and ultra-low fees.'/><link rel='canonical' href='https://www.hypepad.app/'/><meta property='og:title' content='HYPEPAD | Launch Tokens, Presales & Meme Coins'/><meta property='og:description' content='Multi-chain launchpad with bonding curves, LP locks, KYC/SAFU, analytics and ultra-low fees.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">HYPEPAD</span>
            <h1>Launch tokens, presales & meme coins — with <em style={{color:'#ffb37a', fontStyle:'normal'}}>rug-proof</em> tooling.</h1>
            <p>Ultra-low fees, multi-chain support (EVM & Solana), bonding curves, LP locking, KYC/SAFU, and analytics — built for creators and communities.</p>
            <div className="cta">
              <a className="btn" href="/meme-launcher">Launch a Meme Coin</a>
              <a className="btn ghost" href="/presale">Start a Presale</a>
            </div>
            <div className="kpis">
              <div className="kpi">Avg fee: <b>~30% less</b></div>
              <div className="kpi">Chains: <b>6+</b></div>
              <div className="kpi">LP lock: <b>free</b></div>
            </div>
          </div>
          <div className="preview">
            <img src="/hypepad-banner.jpg" alt="Preview" style={{width:'100%',borderRadius:'12px',border:'1px solid #23243a'}}/>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Launch</h2>
          <div className="grid cols-3">
            <a href="/meme-launcher" className="card">Instant Meme Launcher — bonding curves, auto LP burn at graduation.</a>
            <a href="/token-creator" className="card">Token Creator — deflationary/reflection options, anti-bot rules.</a>
            <a href="/presale" className="card">Presale / IDO — caps, vesting, investor dashboards.</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Tools</h2>
          <div className="grid cols-4">
            <a href="/locker" className="card">Token & LP Locker</a>
            <a href="/risk-scanner" className="card">AI Risk Scanner</a>
            <a href="/dao" className="card">DAO Voting</a>
            <a href="/airdrop" className="card">Airdrop Distributor</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Grow</h2>
          <div className="grid cols-3">
            <a href="/leaderboard" className="card">Trending & Leaderboard</a>
            <a href="/ads" className="card">Boosts & Ads</a>
            <a href="/kol" className="card">KOL Partnerships</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}
