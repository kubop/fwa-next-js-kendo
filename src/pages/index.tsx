import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="tw-font-mono tw-flex tw-flex-col tw-items-center tw-justify-between tw-p-12">
      <h1 className="tw-font-bold tw-text-6xl">Welcome to FWA</h1>
      <span>(my <i>first web application</i>)</span>

      <div className="tw-flex tw-flex-col tw-items-center tw-mt-8">
        <h2 className="tw-font-semibold tw-text-3xl">Powered by</h2>
        <ul className="tw-flex tw-flex-col tw-items-center tw-mt-1">
          <li>Next.js 13</li>
          <li>ASP.NET Core Web API</li>
          <li>Typescript</li>
          <li>Tailwindcss</li>
          <li>Kendo UI</li>
        </ul>
      </div>
    </main>
  )
}
