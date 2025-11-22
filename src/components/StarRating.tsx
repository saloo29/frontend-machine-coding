import StarOutline from '../assets/star-outline.svg?react';
import StarFilled from '../assets/star-filled.svg?react'
import type { StarProps } from '../utils/types';
import { useState } from 'react'

const StarRating = ({ starCount} : StarProps) => {
  const [rating, setRating] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  console.log("the rating is plus one:", rating);
  console.log("hoverIndex is", hoverIndex);

  const handleKeyDown = (
    e: React.KeyboardEvent<SVGElement>,
    index: number
  ) => {
    if(e.key === 'Enter' || e.key === "Space" || e.key === " "){
      e.preventDefault();
      setRating(index+1);
    }
  };

  return (
    <>
      <h3 className='heading'>Star Rating Component: {rating} stars</h3>
      {Array.from({ length: starCount}).map((_, index) => {
        const isFilled = hoverIndex !== null ? index <= hoverIndex : focusIndex !== null ? index < focusIndex : index < rating;
        const StarIcon = isFilled ? StarFilled : StarOutline;

        return <StarIcon 
          key={index} 
          tabIndex={0}
          role='button'
          aria-label={`Rating is ${index+1} star`}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="star-main"
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onFocus={() => setFocusIndex(index)}
        />
      })}
    </>
  )
}

export default StarRating;