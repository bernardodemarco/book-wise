import { BookCard } from '@/components/ui/book-card'
import { CategoryLabel } from '@/components/ui/category-label'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'

export default function Explore() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
        <Heading slug="explore" />
        <Input />
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
