import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Presale(){
  const [data, setData] = useState(null);
  useEffect(()=>{ fetch('/api/presale').then(r=>r.json()).then(setData); },[]);
  const eventJsonLd = {
    "@context":"https://schema.org",
    "@type":"Event",
    "name":"HYPE Token Presale",
    "startDate":"2025-08-20T00:00:00Z",
    "endDate":"2025-08-30T00:00:00Z",
    "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
    "eventStatus":"https://schema.org/EventScheduled",
    "organizer":{"@type":"Organization","name":"HYPEPAD"}
  };
  return (
    <>
      <Head>
        <title>Crypto Presales & IDOs | HYPEPAD</title>
        <meta name="description" content="Low-fee IDOs and presales with KYC/SAFU options, event timelines, soft/hard caps, and investor dashboards." />
        <link rel="canonical" href="https://www.hypepad.app/presale" />
        <meta property="og:title" content="Crypto Presales & IDOs | HYPEPAD" />
        <meta property="og:description" content="Low-fee IDOs and presales with KYC/SAFU options, event timelines, soft/hard caps, and investor dashboards." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(eventJsonLd)}} />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, token sale, raise funds, soft cap, hard cap, vesting" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}})} }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Presale", "item": "https://www.hypepad.app/presale"}]})} }} />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Presales & IDOs</h1>
        <p className="muted">Run secure, low-fee launches with rich analytics and KYC/SAFU options.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <pre style={{whiteSpace:'pre-wrap'}}>{data ? JSON.stringify(data,null,2) : "Loading..."}</pre>
        </div>
      </main>
      <Footer />
    </>
  );
}
