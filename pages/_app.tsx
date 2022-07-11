import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import TopBar from '../components/top-bar/top-bar';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
          <TopBar/>
          <NavBar/>
          <Component {...pageProps} />
          <Footer />
      </main>
    </>
  )
}

export default MyApp
