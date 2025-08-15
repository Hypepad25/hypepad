import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ(){
  const faqJsonLd = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"What are the presale fees?","acceptedAnswer":{"@type":"Answer","text":"3.5% presale, 2% private sale, chain-specific upfront fee — gas excluded."}},
      {"@type":"Question","name":"How does LP locking work?","acceptedAnswer":{"@type":"Answer","text":"LP is locked free at 1/3/6/12 months; meme launches burn LP at graduation for rug-proof."}}
    ]
  };
  return (
    <>
      <Head>
        <title>Support & FAQ | HYPEPAD</title>
        <meta name="description" content="Answers to launchpad fees, KYC/SAFU, LP locks, trending boosts, and token/security questions." />
        <link rel="canonical" href="https://www.hypepad.app/faq" />
        <meta property="og:title" content="Support & FAQ | HYPEPAD" />
        <meta property="og:description" content="Answers to launchpad fees, KYC/SAFU, LP locks, trending boosts, and token/security questions." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}} />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, help, support, questions, answers, security" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}})} }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ {__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.hypepad.app/faq"}]})} }} />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Support / FAQ</h1>
        <div className="card" style={{marginTop:'1rem'}}>
          <h3>Fees</h3>
          <p className="muted">3.5% presale, 2% private sale, upfront fixed chain fee. Gas not included.</p>
          <h3>LP Locking</h3>
          <p className="muted">Free locks (1/3/6/12m). Meme launches burn LP on graduation ($65k mcap).</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
