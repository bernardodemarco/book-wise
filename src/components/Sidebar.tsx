import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="flex min-h-screen flex-col items-center rounded-xl bg-gray-700 pb-6 pt-10">
      <BookWiseLogo className="mb-14 h-8 w-32" />
      <nav className="flex flex-col items-center gap-4">
        <Link href="/">Início</Link>
        <Link href="/">Explorar</Link>
      </nav>
      <button className="mt-auto">Fazer login</button>
    </aside>
  )
}
