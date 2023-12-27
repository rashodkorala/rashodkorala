import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/src/components/Layout';
import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  );
}
