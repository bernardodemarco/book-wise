import { GithubIcon } from '@/assets/icons/github-icon'
import { GoogleIcon } from '@/assets/icons/google-icon'
import { GuestIcon } from '@/assets/icons/gues-icon'

import { AuthImage } from '@/components/auth-page/auth-image'
import { AuthCard } from '@/components/ui/auth-card'

export default function AuthPage() {
  return (
    <main className="flex flex-1 justify-center p-5 lg:justify-between">
      <AuthImage />
      <section className="mx-auto flex min-h-full flex-col justify-center gap-10">
        <div className="flex flex-col gap-1">
          <strong className="text-xl font-bold text-gray-100">
            Boas vindas!
          </strong>
          <p className="text-base font-normal text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="w-96 max-w-[80vw] space-y-4">
          <AuthCard socialMedia="google">
            <GoogleIcon />
            Entrar com Google
          </AuthCard>
          <AuthCard socialMedia="github">
            <GithubIcon />
            Entrar com Github
          </AuthCard>
          <AuthCard socialMedia="guest">
            <GuestIcon />
            Entrar como Visitante
          </AuthCard>
        </div>
      </section>
    </main>
  )
}
