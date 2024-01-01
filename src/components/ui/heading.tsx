import { getTextOnSlug } from '@/utils/navLinkData'
import { Glasses, TrendingUp, User2 } from 'lucide-react'

interface HeadingProps {
  slug: '' | 'explore' | 'profile'
}

export function Heading({ slug }: HeadingProps) {
  const headingText = getTextOnSlug(slug)
  const iconClass = 'h-8 w-8 text-green-100'

  return (
    <h1 className="flex items-center gap-3 text-xl font-bold text-gray-100 sm:text-2xl">
      {slug === '' ? (
        <TrendingUp className={iconClass} />
      ) : slug === 'explore' ? (
        <Glasses className={iconClass} />
      ) : (
        <User2 className={iconClass} />
      )}
      {headingText}
    </h1>
  )
}
