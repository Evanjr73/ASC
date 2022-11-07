import '../styles/globals.css'
import type { AppProps } from 'next/app'
import nav from '../src/nav'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
