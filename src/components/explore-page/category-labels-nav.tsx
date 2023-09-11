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
    breakpoints: {
      '(max-width: 1100px)': {
        slides: {
          perView: 3.5,
          spacing: 10,
        },
      },
      '(max-width: 850px)': {
        slides: {
          perView: 2.5,
          spacing: 10,
        },
      },
      '(max-width: 400px)': {
        slides: {
          perView: 1.5,
          spacing: 10,
        },
      },
    },
  })

  return (
    <nav ref={sliderRef} className="keen-slider mt-10 w-fit overflow-hidden">
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
      <CategoryLabel>Computação</CategoryLabel>
    </nav>
  )
}
