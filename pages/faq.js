
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page(){
  return (<>
    <Head><title>Support / FAQ | HYPEPAD</title><meta name='description' content='Answers to common questions.'/><link rel='canonical' href='https://www.hypepad.app/faq'/><meta property='og:title' content='Support / FAQ | HYPEPAD'/><meta property='og:description' content='Answers to common questions.'/><meta property='og:type' content='website'/><meta property='og:url' content='https://www.hypepad.app/faq'/><meta property='og:image' content='/hypepad-banner.jpg'/></Head>
    <Navbar />
    <main className="container">
      <h1>Support / FAQ</h1>
      <p className="hero-sub">Answers to common questions.</p>
    </main>
    <Footer />
  </>);
}
