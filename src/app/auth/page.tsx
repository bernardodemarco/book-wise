import { GithubIcon } from '@/assets/icons/GithubIcon'
import { GoogleIcon } from '@/assets/icons/GoogleIcon'
import { GuestIcon } from '@/assets/icons/GuestIcon'
import { AuthCard } from '@/components/ui/cards/AuthCard'
import Image from 'next/image'
import authImage from 'public/auth-image.png'

export default function AuthPage() {
  return (
    <div className="flex-1 p-5">
      <Image src={authImage} alt="" className="hidden" />
      <section className="mx-auto flex min-h-full w-80 flex-col justify-center gap-10">
        <div className="flex flex-col gap-1">
          <strong className="text-xl font-bold text-gray-100">
            Boas vindas!
          </strong>
          <p className="text-base font-normal text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="space-y-4">
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
    </div>
  )
}
