import '@/styles/globals.css'
import '@progress/kendo-theme-default/dist/all.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
