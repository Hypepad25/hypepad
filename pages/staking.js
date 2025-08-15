import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Staking(){
  const [data, setData] = useState(null);
  useEffect(()=>{ fetch('/api/staking').then(r=>r.json()).then(setData); },[]);
  return (
    <>
      <Head>
        <title>HYPE Staking | HYPEPAD</title>
        <meta name="description" content="Stake HYPE for 1, 3, 6, or 12 months with tiered APYs and early-unstake penalties." />
        <link rel="canonical" href="https://www.hypepad.app/staking" />
        <meta property="og:title" content="HYPE Staking | HYPEPAD" />
        <meta property="og:description" content="Stake HYPE for 1, 3, 6, or 12 months with tiered APYs and early-unstake penalties." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, staking rewards, APR, yield, lock period, penalty" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}}) } } />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Staking", "item": "https://www.hypepad.app/staking"}]}) } } />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Staking Dashboard</h1>
        <p className="muted">Tiered APYs: 10%, 16%, 25%, 40%. Rewards auto-calculated.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <pre style={{whiteSpace:'pre-wrap'}}>{data ? JSON.stringify(data,null,2) : "Loading..."}</pre>
        </div>
      </main>
      <Footer />
    </>
  );
}
