import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Leaderboard(){
  const [data, setData] = useState(null);
  useEffect(()=>{ fetch('/api/trending').then(r=>r.json()).then(setData); },[]);
  return (
    <>
      <Head>
        <title>Trending & Leaderboard | HYPEPAD</title>
        <meta name="description" content="Live trending tokens, paid boosts (4h/8h/12h/24h), and organic metrics." />
        <link rel="canonical" href="https://www.hypepad.app/leaderboard" />
        <meta property="og:title" content="Trending & Leaderboard | HYPEPAD" />
        <meta property="og:description" content="Live trending tokens, paid boosts (4h/8h/12h/24h), and organic metrics." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, trending tokens, token ranks, boosted listings" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}})} }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Leaderboard", "item": "https://www.hypepad.app/leaderboard"}]})} }} />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Trending & Leaderboard</h1>
        <div className="card" style={{marginTop:'1rem'}}>
          <pre style={{whiteSpace:'pre-wrap'}}>{data ? JSON.stringify(data,null,2) : "Loading..."}</pre>
        </div>
      </main>
      <Footer />
    </>
  );
}
