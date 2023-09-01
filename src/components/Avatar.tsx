import { getAvatarDimensionsOnSize } from '@/utils/avatarData'
import Image from 'next/image'
import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<typeof Image> & {
  src: string
  alt: string
  size: 'sm' | 'md' | 'lg'
}

export function Avatar({ src, alt, size, ...props }: AvatarProps) {
  const { width, height, borderWidth } = getAvatarDimensionsOnSize(size)

  return (
    <div
      className={`relative h-[${String(height)}px] w-[${String(
        width,
      )}px] border-green overflow-hidden rounded-full border`}
    >
      <Image className="" src={src} alt={alt} fill={true} {...props} />
    </div>
  )
}
