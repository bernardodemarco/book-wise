import { getAvatarDimensionsOnSize } from '@/utils/avatarData'
import Image from 'next/image'
import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<typeof Image> & {
  src: string
  alt: string
  size: 'sm' | 'md' | 'lg'
}

export function Avatar({ src, alt, size, ...props }: AvatarProps) {
  const [width, height, borderWidth] = getAvatarDimensionsOnSize(size)

  return (
    <Image
      className={`rounded-full border-green-100 ${borderWidth}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}
