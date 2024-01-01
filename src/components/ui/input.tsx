import { Search } from 'lucide-react'

export function Input() {
  return (
    <div className="flex w-[400px] max-w-[60vw] items-center gap-2 rounded border border-gray-500 px-5 py-3 transition-colors focus-within:border-green-200">
      <input
        type="text"
        placeholder="Buscar livro ou autor"
        className="flex-1 bg-gray-800 text-xs text-gray-400 outline-none sm:text-base"
      />
      <Search className="h-3 w-3 text-gray-500 sm:h-5 sm:w-5" />
    </div>
  )
}
