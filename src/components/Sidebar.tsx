import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import { Glasses, TrendingUp, User2 } from 'lucide-react'

import { NavLink } from './NavLink'

export function Sidebar() {
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
      <button className="mt-auto">Fazer login</button>
    </aside>
  )
}
