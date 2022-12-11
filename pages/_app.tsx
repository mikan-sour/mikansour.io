import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Red_Hat_Mono } from '@next/font/google'

const gf = Red_Hat_Mono({ weight: "300" })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gf.className} style={{overflowX:'hidden'}}>
        <Component {...pageProps} />
    </main>
  )}
