'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

interface AuthCardProps {
  socialMedia: 'google' | 'github' | 'guest'
  children: ReactNode
}

export function AuthCard({ socialMedia, children }: AuthCardProps) {
  const router = useRouter()

  function handleAuth() {
    if (socialMedia === 'guest') {
      router.push('/')
    } else {
      signIn(socialMedia)
    }
  }

  return (
    <button
      onClick={handleAuth}
      className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-base font-bold text-gray-200 transition-opacity hover:opacity-90 sm:text-lg"
    >
      {children}
    </button>
  )
}
