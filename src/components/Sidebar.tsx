import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import { Glasses, LogIn, LogOut, TrendingUp, User2 } from 'lucide-react'
import { NavLink } from './NavLink'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Avatar } from './Avatar'

export async function Sidebar() {
  const session = await getServerSession(authOptions)
  const username = session?.user?.name?.split(' ')[0] ?? ''
  const avatarURL = session?.user?.image ?? ''

  return (
    <aside className="flex h-screen-height flex-col items-center rounded-xl bg-gray-800 pb-6 pt-10 sm:bg-gray-700">
      <BookWiseLogo className="mb-14 hidden h-8 w-32 md:block" />
      <nav className="flex flex-col items-start gap-6">
        <NavLink slug="">
          <TrendingUp className="h-4 w-4 text-gray-400 sm:h-6 sm:w-6" />
        </NavLink>
        <NavLink slug="explore">
          <Glasses className="h-4 w-4 text-gray-400 sm:h-6 sm:w-6" />
        </NavLink>
        <NavLink slug="profile">
          <User2 className="h-4 w-4 text-gray-400 sm:h-6 sm:w-6" />
        </NavLink>
      </nav>
      {session ? (
        <button className="mt-auto flex flex-col items-center gap-4 sm:flex-row sm:gap-3">
          <Avatar src={avatarURL} alt="" size="sm" />
          <span className="hidden text-sm font-normal text-gray-200 md:block">
            {username}
          </span>
          <LogOut className="-order-1 h-4 w-4 text-red-500 sm:order-2 sm:h-5 sm:w-5" />
        </button>
      ) : (
        <button className="mt-auto flex flex-col items-center gap-4  sm:flex-row sm:gap-3">
          <span className="block text-xs font-bold text-gray-200 sm:text-base sm:max-md:hidden">
            Fazer login
          </span>
          <LogIn className="h-4 w-4 text-green-100 sm:h-5 sm:w-5" />
        </button>
      )}
    </aside>
  )
}
