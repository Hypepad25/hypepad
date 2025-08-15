import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home(){
  const orgJsonLd = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"HYPEPAD",
    "url":"https://www.hypepad.app",
    "logo":"https://www.hypepad.app/hypepad-banner.jpg",
    "sameAs":["https://twitter.com/hypepad","https://t.me/hypepad25"]
  };
  return (
    <>
      <Head>
        <title>HYPEPAD | Fuel Your Launch. Rule the Hype.</title>
        <meta name="description" content="The ultimate crypto launchpad for presales, IDOs, meme coin launches, token creation, staking, and token lockers — multi-chain ready." />
        <link rel="canonical" href="https://www.hypepad.app/" />
        <meta property="og:title" content="HYPEPAD | Fuel Your Launch. Rule the Hype." />
        <meta property="og:description" content="Launch tokens, presales, and meme coins across all chains. Rug-proof. Secure. Global." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hypepad.app/" />
        <meta property="og:image" content="/hypepad-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HYPEPAD | Fuel Your Launch. Rule the Hype." />
        <meta name="twitter:description" content="Launch tokens, presales, and meme coins across all chains. Rug-proof. Secure. Global." />
        <meta name="twitter:image" content="/hypepad-banner.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}} />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, best crypto launchpad, launch tokens" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}}) } } />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Home", "item": "https://www.hypepad.app/"}]}) } } />
      </Head>
      <Navbar />
      <section className="hero container">
        <img src="/hypepad-banner.jpg" alt="HYPEPAD Banner" />
        <h1 style={{fontSize:'2.25rem', marginTop:'1rem'}}>Fuel Your Launch. Rule the Hype.</h1>
        <p className="muted" style={{marginTop:'0.5rem'}}>The Future of Web3 Starts Here</p>
        <div style={{marginTop:'1rem'}}>
          <a className="btn" href="/meme-launcher">Instant Meme Launch</a>
          <a className="btn" style={{marginLeft:'0.75rem'}} href="/presale">Start a Presale</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
