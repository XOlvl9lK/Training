import React from 'react';

const Article = ({ title, urlToImage, description, url }) => {

let image = `https://static01.nyt.com/${urlToImage}`

    return (
        <div className="article">
            <img src={image} alt=""/>
            <div className="description">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank">Read in source</a>
            </div>

        </div>
    );
};



export default Article;