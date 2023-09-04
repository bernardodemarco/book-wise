import { CategoryLabelsNav } from '@/components/explore-page/category-labels-nav'
import { BookCard } from '@/components/ui/book-card'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'

export default function Explore() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
        <Heading slug="explore" />
        <Input />
      </header>
      <CategoryLabelsNav />
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
