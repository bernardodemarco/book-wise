import { LogIn } from 'lucide-react'

export function LoginModal() {
  return (
    <button className="mt-auto flex flex-col items-center gap-4  sm:flex-row sm:gap-3">
      <span className="block text-xs font-bold text-gray-200 sm:text-base sm:max-md:hidden">
        Fazer login
      </span>
      <LogIn className="h-4 w-4 text-green-100 sm:h-5 sm:w-5" />
    </button>
  )
}
