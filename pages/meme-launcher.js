import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function MemeLauncher(){
  const [data, setData] = useState(null);
  useEffect(()=>{ fetch('/api/meme-launcher').then(r=>r.json()).then(setData); },[]);
  const productJsonLd = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":"Meme Coin Launcher",
    "brand":{"@type":"Brand","name":"HYPEPAD"},
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/PreOrder"}
  };
  return (
    <>
      <Head>
        <title>Meme Coin Launcher | HYPEPAD</title>
        <meta name="description" content="Instant meme coin creation with bonding curves, $65K graduation to DEX, mandatory LP burn (rug-proof)." />
        <link rel="canonical" href="https://www.hypepad.app/meme-launcher" />
        <meta property="og:title" content="Meme Coin Launcher | HYPEPAD" />
        <meta property="og:description" content="Instant meme coin creation with bonding curves, $65K graduation to DEX, mandatory LP burn (rug-proof)." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(productJsonLd)}} />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, pump.fun alternative, bonk.fun alternative, launch meme coin" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}})} }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Meme Launcher", "item": "https://www.hypepad.app/meme-launcher"}]})} }} />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Meme Coin Launcher</h1>
        <p className="muted">Create on Solana & EVM. Lower fees than Pump.fun & Bonk.fun. LP burn on graduation.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <pre style={{whiteSpace:'pre-wrap'}}>{data ? JSON.stringify(data,null,2) : "Loading..."}</pre>
        </div>
      </main>
      <Footer />
    </>
  );
}
