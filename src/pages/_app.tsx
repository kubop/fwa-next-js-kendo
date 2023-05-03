import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import '@progress/kendo-theme-material/dist/all.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
