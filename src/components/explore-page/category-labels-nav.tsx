'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { CategoryLabel } from '../ui/category-label'

export function CategoryLabelsNav() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 12,
    },
  })

  return (
    <nav
      ref={sliderRef}
      // className="mt-10 flex flex-wrap items-center gap-3"
      className="keen-slider mt-10"
    >
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
    </nav>
  )
}
