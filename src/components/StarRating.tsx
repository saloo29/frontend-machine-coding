import StarOutline from '../assets/star-outline.svg?react';
import StarFilled from '../assets/star-filled.svg?react'
import type { StarProps } from '../utils/types';
import { useState } from 'react'

const StarRating = ({ starCount} : StarProps) => {
  const [rating, setRating] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  console.log("the rating is plus one:", rating)
  console.log("hoverIndex is", hoverIndex)

  return (
    <>
      <h4>Star Rating Component: {rating} stars</h4>
      {Array.from({ length: starCount}).map((_, index) => {
        const isFilled = hoverIndex !== null ? index <= hoverIndex : index < rating;
        const StarIcon = isFilled ? StarFilled : StarOutline;

        return <StarIcon 
          key={index} 
          className="star-main"
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        />
      })}
    </>
  )
}

export default StarRating;