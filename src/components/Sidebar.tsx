import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import { Glasses, LogIn, LogOut, TrendingUp, User2 } from 'lucide-react'

import { NavLink } from './NavLink'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Avatar } from './Avatar'

export async function Sidebar() {
  const session = await getServerSession(authOptions)

  return (
    <aside className="flex h-screen-height flex-col items-center rounded-xl bg-gray-700 pb-6 pt-10">
      <BookWiseLogo className="mb-14 h-8 w-32" />
      <nav className="flex flex-col items-start gap-6">
        <NavLink slug="">
          <TrendingUp className="h-6 w-6 text-gray-400" />
        </NavLink>
        <NavLink slug="explore">
          <Glasses className="h-6 w-6 text-gray-400" />
        </NavLink>
        <NavLink slug="profile">
          <User2 className="h-6 w-6 text-gray-400" />
        </NavLink>
      </nav>
      {session ? (
        <button className="mt-auto flex items-center gap-3">
          <span className="text-sm font-normal text-gray-200">
            {!!session.user?.image && (
              <Avatar src={session.user.image} alt="" size="lg" />
            )}
          </span>{' '}
          <LogOut className="h-5 w-5 text-red-500" />
        </button>
      ) : (
        <button className="mt-auto flex items-center gap-3 text-base font-bold text-gray-200">
          Fazer login <LogIn className="h-5 w-5 text-green-100" />
        </button>
      )}
    </aside>
  )
}
