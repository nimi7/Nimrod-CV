import React from "react";
import ReactStars from "react-rating-stars-component";


export default function starsrating() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='w-auto'>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />

        </div>
    )
}