import React, { useState, useEffect } from 'react';
import comments from "./comments";

const CommentWrap = ({ currentCard, children }) => {
    const [ comment, setComment ] = useState([]);

    useEffect(() => {
        setComment(wrap(currentCard))
    }, [currentCard]);

    function wrap(currentCard) {
        let wrap = [];
        for (let i = currentCard; i < currentCard + 3 ; i++) {
            if (i >= comments.length) {
                break;
            }
            wrap.push(
                <div key={comments[i].id} className="comment">
                    <img src={comments[i].photo} alt=""/>
                    <h3>{comments[i].name}</h3>
                    <p className="profession">{comments[i].profession}</p>
                    <p>{comments[i].comment}</p>
                </div>
            );
        }
        return wrap;
    }

    return (
        <>
            <div className="comment-card">
                {comment}
            </div>
            {children}
        </>
    );
};

export default CommentWrap;