'use client'

import { SessionProvider as NexAuthSessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import type { Session } from 'next-auth'

interface SessionProviderProps {
  children: ReactNode
  session: Session
}

export function SessionProvider({ children, session }: SessionProviderProps) {
  return (
    <NexAuthSessionProvider session={session}>
      {children}
    </NexAuthSessionProvider>
  )
}
