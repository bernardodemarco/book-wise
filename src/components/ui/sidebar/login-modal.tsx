'use client'

import { LogIn, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { AuthCard } from '../auth-card'
import { GoogleIcon } from '@/assets/icons/GoogleIcon'
import { GithubIcon } from '@/assets/icons/GithubIcon'

export function LoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mt-auto flex flex-col items-center gap-4  sm:flex-row sm:gap-3">
          <span className="block text-xs font-bold text-gray-200 sm:text-base sm:max-md:hidden">
            Fazer login
          </span>
          <LogIn className="h-4 w-4 text-green-100 sm:h-5 sm:w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-green-100 opacity-60" />
        <Dialog.Content className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-8 rounded-xl bg-gray-700 px-24 py-10">
          <Dialog.Title className="font-bold text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.Title>
          <div className="space-y-4">
            <AuthCard socialMedia="google">
              <GoogleIcon />
              Entrar com Google
            </AuthCard>
            <AuthCard socialMedia="github">
              <GithubIcon />
              Entrar com Github
            </AuthCard>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4">
              <X className="h6 w-6 text-gray-400" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
