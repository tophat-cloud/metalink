import '../styles/globals.css';
import '../styles/reset.css';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Meta Link</title>
        <meta name="description" content="This is metalink from tophat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>

      <Footer/> 
    </>
  )
};

export default App;
