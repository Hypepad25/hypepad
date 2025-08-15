
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Contact Support | HYPEPAD</title><meta name='description' content='Reach the team.'/><link rel='canonical' href='https://www.hypepad.app/support'/><meta property='og:title' content='Contact Support | HYPEPAD'/><meta property='og:description' content='Reach the team.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/support'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="container">
      <h1>Contact Support</h1>
      <p className="hero-sub">Reach the team.</p>
    </main>
    <Footer />
  </>);
}
