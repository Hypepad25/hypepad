import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TokenCreator(){
  return (
    <>
      <Head>
        <title>Token Creator | HYPEPAD</title>
        <meta name="description" content="Create tokens across Ethereum, BNB Chain, Solana, Polygon, Arbitrum, Avalanche — deflationary, reflection, standard." />
        <link rel="canonical" href="https://www.hypepad.app/token-creator" />
        <meta property="og:title" content="Token Creator | HYPEPAD" />
        <meta property="og:description" content="Create tokens across Ethereum, BNB Chain, Solana, Polygon, Arbitrum, Avalanche — deflationary, reflection, standard." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
              <meta name="keywords" content="crypto launchpad, token creation, token generator, meme coin launch, bonding curve, presale, IDO, fair launch, KYC, SAFU, staking, APY, token locker, LP lock, DEX listing, Raydium graduation, Solana launch, EVM launch, Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, multichain, low fee launchpad, anti-bot, rug-proof, web3 launch, airdrop tool, DAO voting, leaderboard, trending tokens, paid trending, presale dashboard, investor portal, crypto IDO platform, multi-chain launchpad, ERC-20, SPL token, tokenomics, reflection token, deflationary token" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.hypepad.app/", "name": "HYPEPAD", "potentialAction": {"@type": "SearchAction", "target": "https://www.hypepad.app/search?q={search_term_string}", "query-input": "required name=search_term_string"}}) } } />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypepad.app/"}, {"@type": "ListItem", "position": 2, "name": "Token Creator", "item": "https://www.hypepad.app/token-creator"}]}) } } />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Token Creator</h1>
        <p className="muted">Smart contract templates with anti-bot rules and custom taxes. Deployment hooks ready.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <p>Form goes here (name, symbol, supply, taxes, LP lock duration, etc.).</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
