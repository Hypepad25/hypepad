
import Link from "next/link";
import { useState } from "react";

const groups = [
  { label: "Launch", items: [
      { href: "/meme-launcher", label: "Meme Launcher" },
      { href: "/token-creator", label: "Token Creator" },
      { href: "/presale", label: "Presale / IDO" },
      { href: "/nft-mint", label: "NFT Mint Tool" },
      { href: "/bundle-launch", label: "Bundle Launches" },
    ]
  },
  { label: "Tools", items: [
      { href: "/locker", label: "Token & LP Locker" },
      { href: "/risk-scanner", label: "AI Risk Scanner" },
      { href: "/dao", label: "DAO Voting Builder" },
      { href: "/airdrop", label: "Airdrop Distributor" },
      { href: "/gas-tracker", label: "Gas Tracker" },
      { href: "/analytics", label: "Token Analytics" },
      { href: "/portfolio", label: "Portfolio Tracker" },
    ]
  },
  { label: "Marketplace", items: [
      { href: "/cross-promo", label: "Cross-Promo Marketplace" },
      { href: "/ads", label: "Paid Advertising" },
      { href: "/kol", label: "Partner / KOL" },
    ]
  },
  { label: "Docs", items: [
      { href: "/faq", label: "Support / FAQ" },
      { href: "/whitepaper", label: "Whitepaper" },
      { href: "/support", label: "Contact Support" },
    ]
  }
];

export default function Navbar(){
  const [openIndex,setOpenIndex] = useState(-1);
  const [mobileOpen,setMobileOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-inner container">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="HYPEPAD" />
        </Link>

        <ul className="menu">
          <li><Link href="/leaderboard">Leaderboard</Link></li>
          <li><Link href="/staking">Staking</Link></li>

          {groups.map((g, i) => (
            <li key={i}
                className="dropdown"
                data-open={openIndex === i}
                onMouseEnter={()=>setOpenIndex(i)}
                onMouseLeave={()=>setOpenIndex(-1)}>
              <a href="#" onClick={(e)=>{e.preventDefault(); setOpenIndex(openIndex===i?-1:i);}}>
                {g.label}<span className="caret"></span>
              </a>
              <div className="dropdown-menu" onMouseLeave={()=>setOpenIndex(-1)}>
                <div className="group">
                  <div className="heading">{g.label}</div>
                  {g.items.map((it,ii)=>(<Link key={ii} href={it.href}>{it.label}</Link>))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Menu">☰</button>
      </div>

      <div className={`mobile-panel ${mobileOpen?'open':''}`}>
        <div className="section">
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/staking">Staking</Link>
        </div>
        {groups.map((g, i)=>(
          <div className="section" key={i}>
            <div className="title">{g.label}</div>
            {g.items.map((it,ii)=>(<Link key={ii} href={it.href}>{it.label}</Link>))}
          </div>
        ))}
      </div>
    </div>
  );
}
