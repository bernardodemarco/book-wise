import Image from 'next/image'
import bookImage from 'public/book-image.png'
import { Stars } from './stars'

export function BookCard() {
  return (
    <article className="grid w-max max-w-[70vw] cursor-pointer grid-cols-1 justify-items-center gap-x-5 gap-y-3 rounded-lg border-2 border-gray-700 bg-gray-700 px-5 py-4 hover:border-gray-600 sm:grid-cols-bookCard">
      <Image src={bookImage} width={108} height={152} alt="" />
      <section className="flex flex-col items-center sm:items-start">
        <strong className="block text-base font-bold text-gray-100">
          A revolução dos bichos
        </strong>
        <span className="block text-sm text-gray-400">George Orwell</span>
        <div className="mt-1 sm:mt-auto">
          <Stars rating={3} />
        </div>
      </section>
    </article>
  )
}
