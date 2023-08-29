import { GithubIcon } from '@/assets/icons/GithubIcon'
import { GoogleIcon } from '@/assets/icons/GoogleIcon'
import { GuestIcon } from '@/assets/icons/GuestIcon'
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
          <button className="flex w-full max-w-[85vw] items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
            <GoogleIcon />
            Entrar com Google
          </button>
          <button className="flex w-full max-w-[85vw] items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
            <GithubIcon />
            Entrar com Github
          </button>
          <button className="flex w-full max-w-[85vw] items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
            <GuestIcon />
            Entrar como visitante
          </button>
        </div>
      </section>
    </div>
  )
}
