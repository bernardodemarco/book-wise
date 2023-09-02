'use client'

import { LogOut } from 'lucide-react'
import { Avatar } from '../Avatar'
import { signOut } from 'next-auth/react'

interface LogoutButtonProps {
  avatarURL: string
  username: string
}

export function LogoutButton({ avatarURL, username }: LogoutButtonProps) {
  function handleLogout() {
    signOut()
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-auto flex flex-col items-center gap-4 sm:flex-row sm:gap-3"
    >
      <Avatar src={avatarURL} alt="" size="sm" />
      <span className="hidden text-sm font-normal text-gray-200 md:block">
        {username}
      </span>
      <LogOut className="-order-1 h-4 w-4 text-red-500 sm:order-2 sm:h-5 sm:w-5" />
    </button>
  )
}
