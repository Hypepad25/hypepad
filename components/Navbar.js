
import Link from "next/link";
import { useState } from "react";
const menus=[
  {label:"Launch",items:[
    {href:"/meme-launcher",label:"Meme Launcher"},
    {href:"/token-creator",label:"Token Creator"},
    {href:"/presale",label:"Presale / IDO"},
    {href:"/nft-mint",label:"NFT Mint Tool"},
    {href:"/bundle-launch",label:"Bundle Launches"}]},
  {label:"Tools",items:[
    {href:"/locker",label:"Token & LP Locker"},
    {href:"/risk-scanner",label:"AI Risk Scanner"},
    {href:"/dao",label:"DAO Voting Builder"},
    {href:"/airdrop",label:"Airdrop Distributor"},
    {href:"/gas-tracker",label:"Gas Tracker"},
    {href:"/analytics",label:"Token Analytics"},
    {href:"/portfolio",label:"Portfolio Tracker"}]},
  {label:"Marketplace",items:[
    {href:"/cross-promo",label:"Cross‑Promo Marketplace"},
    {href:"/ads",label:"Paid Advertising"},
    {href:"/kol",label:"Partner / KOL"}]},
  {label:"Docs",items:[
    {href:"/faq",label:"Support / FAQ"},
    {href:"/whitepaper",label:"Whitepaper"},
    {href:"/support",label:"Contact Support"}]}
];
export default function Navbar(){
  const[open,setOpen]=useState(false);
  return(<div className='navbar'>
    <div className='nav-inner container'>
      <Link href='/' className='brand'><img src='/logo.svg' alt='HYPEPAD'/><span>HYPEPAD</span></Link>
      <ul className='menu'>
        <li><Link href='/leaderboard'>Leaderboard</Link></li>
        <li><Link href='/staking'>Staking</Link></li>
        {menus.map((m,i)=>(<li key={i} className='dropdown'><a href='#'>{m.label}</a><div className='dropdown-menu'>
          {m.items.map((it,ii)=>(<Link key={ii} href={it.href}>{it.label}</Link>))}
        </div></li>))}
      </ul>
      <button className='hamburger' aria-label='Menu' onClick={()=>setOpen(!open)}>☰</button>
    </div>
    <div className={`mobile-panel ${open?'open':''}`}>
      <div className='mobile-group'><Link href='/leaderboard'>Leaderboard</Link><Link href='/staking'>Staking</Link></div>
      {menus.map((m,i)=>(<div className='mobile-group' key={i}><h4>{m.label}</h4>{m.items.map((it,ii)=>(<Link key={ii} href={it.href}>{it.label}</Link>))}</div>))}
    </div>
  </div>);
}
