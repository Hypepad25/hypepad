import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Search(){
  const router = useRouter();
  const q = (router.query.q || "").toString();
  return (
    <>
      <Head>
        <title>Search | HYPEPAD</title>
        <meta name="description" content="Search HYPEPAD for presales, meme coin launches, token creation, staking, and more." />
        <link rel="canonical" href="https://www.hypepad.app/search" />
        <meta property="og:title" content="Search | HYPEPAD" />
        <meta property="og:description" content="Find presales, meme launches, token tools, staking, and docs." />
        <meta property="og:image" content="/hypepad-banner.jpg" />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Search</h1>
        <p className="muted">Query: {q || "Type in the search bar."}</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <p>Search results are coming soon. Try terms like <b>presale</b>, <b>meme</b>, <b>staking</b>, <b>token creator</b>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
