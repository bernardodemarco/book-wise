import { BookCard } from '@/components/ui/book-card'
import { CategoryLabel } from '@/components/ui/category-label'
import { Glasses, Search } from 'lucide-react'

export default function Explore() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
        <h1 className="flex items-center gap-3 text-xl font-bold text-gray-100 sm:text-2xl">
          <Glasses className="h-8 w-8 text-green-100" />
          Explorar
        </h1>
        <div className="flex w-[400px] max-w-[60vw] items-center gap-2 rounded border border-gray-500 px-5 py-3 transition-colors focus-within:border-green-200">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="flex-1 bg-gray-800 text-xs text-gray-400 outline-none sm:text-base"
          />
          <Search className="h-3 w-3 text-gray-500 sm:h-5 sm:w-5" />
        </div>
      </header>
      <nav className="mt-10 flex flex-wrap items-center gap-3">
        <CategoryLabel>Computação</CategoryLabel>
        <CategoryLabel>Computação</CategoryLabel>
        <CategoryLabel>Computação</CategoryLabel>
        <CategoryLabel>Computação</CategoryLabel>
        <CategoryLabel>Computação</CategoryLabel>
        <CategoryLabel>Computação</CategoryLabel>
      </nav>
      <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-booksGrid">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </section>
    </>
  )
}
