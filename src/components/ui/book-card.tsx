import Image from 'next/image'
import bookImage from 'public/book-image.png'
import { Stars } from './stars'

export function BookCard() {
  return (
    <article className="grid w-max grid-cols-bookCard gap-x-5 rounded-lg bg-gray-700 px-5 py-4">
      <Image src={bookImage} width={108} height={152} alt="" />
      <section className="flex flex-col">
        <strong className="block text-base font-bold text-gray-100">
          A revolução dos bichos
        </strong>
        <span className="block text-sm text-gray-400">George Orwell</span>
        <div className="mt-auto">
          <Stars numOfFilledStars={3} />
        </div>
      </section>
    </article>
  )
}
