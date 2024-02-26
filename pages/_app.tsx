import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
