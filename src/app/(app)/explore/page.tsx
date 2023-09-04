import { Glasses, Search } from 'lucide-react'

export default function Explore() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="flex items-center gap-3 text-2xl font-bold text-gray-100">
          <Glasses className="h-8 w-8 text-green-100" />
          Explorar
        </h1>
        <div className="flex w-[400px] items-center gap-2 rounded border border-gray-500 px-5 py-3">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="flex-1 bg-gray-800 text-gray-400 outline-none"
          />
          <Search className="h-5 w-5 text-gray-500" />
        </div>
      </header>
      <nav></nav>
      <section></section>
    </>
  )
}
