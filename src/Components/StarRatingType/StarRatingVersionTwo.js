import React, { useState } from 'react'

export default function StarRatingVersionTwo(props) {
    let limit = props.limit || 5;
    const [rating, setRating] = useState(props.rating || 2);

    const handleChange = (e) => {
        setRating(e.target.getAttribute("data"))
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
