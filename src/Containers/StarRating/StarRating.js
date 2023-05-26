import React from 'react';
import "./StarRating.scss";
import StarRatingVersionOne from '../../Components/StarRatingType/StarRatingVersionOne';
import StarRatingVersionTwo from '../../Components/StarRatingType/StarRatingVersionTwo';

export default function StarRating() {
    return (
        <div className="star-rating-page">
            <div>
                <h3>StarRatingVersionOne</h3>
                <StarRatingVersionOne limit={5} rating={2} />
            </div>
            <div>
                <h3>use getAttribute key</h3>
                <StarRatingVersionTwo limit={5} rating={2} />
            </div>
        </div>
    )
}
