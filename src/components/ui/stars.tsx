import { FilledStar } from '@/assets/icons/filled-star'
import { Star } from '@/assets/icons/star'

interface StarsProps {
  numOfFilledStars: number
}

export function Stars({ numOfFilledStars }: StarsProps) {
  const starsArray = Array.from({ length: 5 }).map((_, index) => {
    return `star-${index}`
  })

  return (
    <div className="flex items-center gap-1">
      {starsArray.map((star, index) => {
        const isFilled = index <= numOfFilledStars - 1

        if (isFilled) {
          return <FilledStar key={star} />
        }

        return <Star key={star} />
      })}
    </div>
  )
}
