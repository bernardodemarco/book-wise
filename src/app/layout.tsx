import './../styles/globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'

const nunitoSans = NunitoSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'BookWise web platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
