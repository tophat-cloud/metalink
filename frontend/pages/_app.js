import '../styles/globals.css';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Meta Link</title>
        <meta name="description" content="This is metalink from tophat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <Component {...pageProps} />

      <Footer/>
    </>
  )
};
