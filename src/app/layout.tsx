import './../styles/globals.css'
import type { Metadata } from 'next'
import { getServerSession, Session } from 'next-auth'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import { SessionProvider } from '@/contexts/SessionProvider'

const nunitoSans = NunitoSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'BookWise web platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = (await getServerSession()) as Session

  return (
    <html lang="pt-BR">
      <SessionProvider session={session}>
        <body className={nunitoSans.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
