import React, { useState } from 'react';
import comments from "./comments";
import CommentWrap from "./CommentWrap.jsx";

const CommentCard = () => {
    const [ currentCard, setCurrentCard ] = useState(0);

    let dots = [];
    for (let i = 0; i < Math.ceil(comments.length / 3); i++) {
        if (i === 0) {
            dots.push(<span key={comments[i].id} onClick={event => handleCardChange(event, i)} className="dot dot-active" />);
        } else {
            dots.push(<span key={comments[i].id} onClick={event => handleCardChange(event, i)} className="dot" />);
        }
    }

    function handleCardChange(event, card) {
        document.querySelector('.dot-active').classList.toggle("dot-active");
        setCurrentCard(card * 3);
        event.target.classList.toggle("dot-active");
    }

    return (

        <CommentWrap currentCard={currentCard}>
            <div className="dots">
                {dots}
            </div>
        </CommentWrap>
    );
};

export default CommentCard;