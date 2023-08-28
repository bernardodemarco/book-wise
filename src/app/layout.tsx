import './../styles/globals.css'
import type { Metadata } from 'next'
import { getServerSession, Session } from 'next-auth'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import { SessionProvider } from '@/contexts/SessionProvider'
import { authOptions } from '@/lib/auth'

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
  const session = (await getServerSession(authOptions)) as Session

  return (
    <html lang="pt-BR">
      <SessionProvider session={session}>
        <body className={nunitoSans.className}>
          <main className="flex min-h-screen bg-gray-800">{children}</main>
        </body>
      </SessionProvider>
    </html>
  )
}
