import React from 'react';
import CommentCard from "./commentCard/CommentCard.jsx";

const Review = () => {

    return (
        <div className="review container">
            <h1>What They Says</h1>
            <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
            </p>
            <CommentCard/>
        </div>
    );
};

export default Review;