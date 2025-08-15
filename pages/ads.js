import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Ads(){
  return (
    <>
      <Head>
        <title>Paid Advertising | HYPEPAD</title>
        <meta name="description" content="Buy banner slots and trending boosts (4h/8h/12h/24h) — managed via admin." />
        <link rel="canonical" href="https://www.hypepad.app/ads" />
        <meta property="og:title" content="Paid Advertising | HYPEPAD" />
        <meta property="og:description" content="Buy banner slots and trending boosts (4h/8h/12h/24h) — managed via admin." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, promotions, banner ads, boosted trending, sponsor" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}})} }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Advertising", "item": "https://www.hypepad.app/ads"}]})} }} />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Paid Advertising</h1>
        <div className="card" style={{marginTop:'1rem'}}>
          <p>Choose a slot duration: 4h / 8h / 12h / 24h. Payments & proofs handled in Admin.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
