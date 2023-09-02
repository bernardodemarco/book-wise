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
          ? "mr-4 flex items-center gap-3 before:block before:h-4 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] sm:before:h-6 sm:before:w-1"
          : "mr-4 flex items-center gap-3 before:block before:h-4 before:w-1 before:rounded-full before:bg-gray-800 before:content-[''] sm:before:h-6 sm:before:w-1 sm:before:bg-gray-700"
      }
    >
      {children}
      <span className="hidden text-base font-bold text-gray-100 md:block">
        {navLinkText}
      </span>
    </Link>
  )
}
