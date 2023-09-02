'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { getNavLinkTextOnSlug } from '@/utils/navLinkData'
import { Glasses, TrendingUp, User2 } from 'lucide-react'

interface NavLinkProps {
  slug: '' | 'explore' | 'profile'
}

export function NavLink({ slug }: NavLinkProps) {
  const currentPath = useSelectedLayoutSegment() ?? ''
  const isActive = currentPath === slug
  const navLinkText = getNavLinkTextOnSlug(slug)

  const linkClass = isActive
    ? "group mr-4 flex items-center gap-3 before:block before:h-4 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] sm:before:h-6 sm:before:w-1"
    : "group mr-4 flex items-center gap-3 before:block before:h-4 before:w-1 before:rounded-full before:bg-gray-800 before:content-[''] hover:text-gray-100 sm:before:h-6 sm:before:w-1 sm:before:bg-gray-700"

  const iconClass = isActive
    ? 'h-4 w-4 text-gray-100 font-bold group-hover:text-gray-100 sm:h-6 sm:w-6'
    : 'h-4 w-4 text-gray-400 group-hover:text-gray-100 group-hover:font-bold sm:h-6 sm:w-6'

  const textClass = isActive
    ? 'hidden text-base font-bold text-gray-100 md:block'
    : 'hidden text-base text-gray-400 group-hover:text-gray-100 md:block'

  return (
    <Link href={`/${slug}`} className={linkClass}>
      {slug === '' ? (
        <TrendingUp className={iconClass} />
      ) : slug === 'explore' ? (
        <Glasses className={iconClass} />
      ) : (
        <User2 className={iconClass} />
      )}
      <span className={textClass}>{navLinkText}</span>
    </Link>
  )
}
