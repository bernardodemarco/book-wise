import Image from 'next/image'
import authImage from 'public/auth-image.png'
import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'

export function AuthImage() {
  return (
    // eslint-disable-next-line
    <div className="bg-background-gradient relative hidden w-[600px] overflow-hidden rounded-xl">
      <Image
        src={authImage}
        alt="Imagem de uma mulher deitada em um sofá lendo um livro"
        className="h-absolute object-cover opacity-20"
        fill={true}
        sizes="(max-width: 1023px) 0px, 600px"
        priority={true}
      />
      <BookWiseLogo className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
