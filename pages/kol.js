import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KOL(){
  return (
    <>
      <Head>
        <title>Partner / KOL Program | HYPEPAD</title>
        <meta name="description" content="Apply for KOL partnerships, track performance, and get referral commissions." />
        <link rel="canonical" href="https://www.hypepad.app/kol" />
        <meta property="og:title" content="Partner / KOL Program | HYPEPAD" />
        <meta property="og:description" content="Apply for KOL partnerships, track performance, and get referral commissions." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, KOL, influencer program, referrals, affiliate" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}}) } } />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "KOL", "item": "https://www.hypepad.app/kol"}]}) } } />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Partner / KOL Program</h1>
        <div className="card" style={{marginTop:'1rem'}}>
          <p>Apply via email: <a href="mailto:contact@hypepad.app">contact@hypepad.app</a> with your Telegram handle (@hypepad25).</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
