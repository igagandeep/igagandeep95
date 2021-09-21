/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gagan - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header/>
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    </div>
  )
}
