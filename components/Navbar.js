import Link from "next/link";
import { useState } from "react";
export default function Navbar(){
  const [open,setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-inner container">
        <Link href="/" className="brand"><span className="rocket">🚀</span><span>HYPEPAD</span></Link>
        <nav className="nav-links">
          <Link className="nav-link" href="/presale">Presale</Link>
          <Link className="nav-link" href="/meme-launcher">Meme Launcher</Link>
          <Link className="nav-link" href="/token-creator">Token Creator</Link>
          <Link className="nav-link" href="/staking">Staking</Link>
          <Link className="nav-link" href="/leaderboard">Leaderboard</Link>
          <Link className="nav-link" href="/faq">FAQ</Link>
          <Link className="nav-link" href="/kol">KOL</Link>
          <Link className="nav-link" href="/ads">Ads</Link>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={()=>setOpen(!open)}>☰</button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`} onClick={()=>setOpen(false)}>
        <Link href="/presale">Presale</Link>
        <Link href="/meme-launcher">Meme Launcher</Link>
        <Link href="/token-creator">Token Creator</Link>
        <Link href="/staking">Staking</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/kol">KOL</Link>
        <Link href="/ads">Ads</Link>
      </div>
    </div>
  );
}
