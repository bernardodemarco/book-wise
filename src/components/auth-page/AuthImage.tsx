import { BookWiseLogo } from '@/assets/icons/BookWiseLogo'
import Image from 'next/image'
import authImage from 'public/auth-image.png'

export function AuthImage() {
  return (
    <div className="bg-background-gradient relative hidden w-[600px] overflow-hidden rounded-xl lg:block">
      <Image
        src={authImage}
        alt=""
        className="h-authImageHeight absolute object-cover opacity-20"
      />
      <BookWiseLogo className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
