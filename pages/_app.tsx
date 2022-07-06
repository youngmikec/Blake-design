import '../styles/globals.css'
import styles from '../styles/Home.module.css';
import type { AppProps } from 'next/app'
import TopBar from '../components/top-bar/top-bar';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
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
