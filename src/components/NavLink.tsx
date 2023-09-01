'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { getNavLinkTextOnSlug } from '@/utils/navLinkData'
import { ReactNode } from 'react'

interface NavLinkProps {
  slug: '' | 'explore' | 'profile'
  children: ReactNode
}

export function NavLink({ slug, children }: NavLinkProps) {
  const currentPath = useSelectedLayoutSegment() ?? ''
  const isActive = currentPath === slug
  const navLinkText = getNavLinkTextOnSlug(slug)

  return (
    <Link
      href={`/${slug}`}
      className={
        isActive
          ? "mr-4 flex items-center gap-3 before:block before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-['']"
          : "mr-4 flex items-center gap-3 before:block before:h-6 before:w-1 before:rounded-full before:bg-gray-700 before:content-['']"
      }
    >
      {children}
      <span className="text-base font-bold text-gray-100">{navLinkText}</span>
    </Link>
  )
}
