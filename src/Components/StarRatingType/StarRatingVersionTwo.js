import React, { useState } from 'react'

export default function StarRatingVersionTwo(props) {
    let limit = props.limit || 5;
    const [rating, setRating] = useState(props.rating || 2);

    const handleChange = (e) => {
        let rated = parseInt(e.target.getAttribute("data"))
        if (rated === 1 && rating === 1) {
            setRating(0)
        } else {
            setRating(rated)
        }
    }

    return (
        <div onClick={handleChange}>
            {[...new Array(limit).keys()].map((i) => {
                return (
                    <span 
                        key={i} 
                        data={ i + 1}
                        className={i < rating ? 'star rated' : 'star'}
                    ></span>
                )
            })}
        </div>
    )
}
