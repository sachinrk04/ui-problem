import React, { useState } from 'react'

export default function StarRatingVersionOne(props) {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  const handleChange = (index) => {
    if (index === 1 && rating === 1) {
        setRating(0)
    } else {
        setRating(index)
    }
  }

  return (
      <div>
          {[...new Array(limit).keys()].map((i) => {
              return (
                  <span 
                      key={i} 
                      onClick={() => handleChange(i + 1)}
                      className={i < rating ? 'star rated' : 'star'}
                  ></span>
              )
          })}
      </div>
  )
}
