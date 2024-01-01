'use client'

import { ReactNode, useState } from 'react'

interface CategoryLabelProps {
  children: ReactNode
}

export function CategoryLabel({ children }: CategoryLabelProps) {
  const [isActive, setIsActive] = useState(false)

  function handleCategoryClick() {
    setIsActive((prev) => !prev)
  }

  return (
    <span
      onClick={handleCategoryClick}
      className={
        isActive
          ? 'keen-slider__slide flex max-w-[128px] cursor-pointer items-center justify-center rounded-full border-none bg-purple-200 px-4 py-1 text-center text-base font-normal text-gray-100'
          : 'keen-slider__slide flex max-w-[128px] items-center justify-center rounded-full border border-purple-100 px-4 py-1 text-center text-base font-normal text-purple-100 transition-colors hover:cursor-pointer hover:bg-purple-200 hover:text-gray-100'
      }
    >
      {children}
    </span>
  )
}

// onClick={handleCategoryClick}
// className={
//   isActive
//     ? 'keen-slider__slide flex w-32 cursor-pointer items-center justify-center rounded-full border-none bg-purple-200 px-4 py-1 text-center text-base font-normal text-gray-100'
//     : 'keen-slider__slide flex w-32 items-center justify-center rounded-full border border-purple-100 px-4 py-1 text-center text-base font-normal text-purple-100 transition-colors hover:cursor-pointer hover:bg-purple-200 hover:text-gray-100'
// }
