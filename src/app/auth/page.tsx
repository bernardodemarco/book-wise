import Image from 'next/image'
import authImage from 'public/auth-image.png'

export default function AuthPage() {
  return (
    <div className="flex-1 p-5">
      <Image src={authImage} alt="" className="hidden" />
      <section className="flex min-h-full flex-col items-center justify-center">
        <strong className="text-xl font-bold text-gray-100">
          Boas vindas!
        </strong>
        <p className="text-base font-normal text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>
        <div>
          <button className="rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
            Entrar com Google
          </button>
        </div>
      </section>
    </div>
  )
}
