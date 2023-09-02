import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import { Glasses, TrendingUp, User2 } from 'lucide-react'
import { NavLink } from './nav-link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { LoginModal } from './login-modal'
import { LogoutButton } from './logout-button'

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
        <LogoutButton avatarURL={avatarURL} username={username} />
      ) : (
        <LoginModal />
      )}
    </aside>
  )
}
