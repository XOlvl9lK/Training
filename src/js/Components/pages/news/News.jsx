import React, { useState, useEffect } from 'react';
import RecentPagesBanner from "../../recentPagesBanner/RecentPagesBanner.jsx"
import Article from "./components/Article.jsx";
import Search from "./components/Search.jsx";
import NewsFilter from "./components/NewsFilter.jsx";

const ACCESS_CONTROL = 'https://cors-anywhere.herokuapp.com/';
const NEWS_API = 'https://newsapi.org/v2/';
const TOP_HEADLINES = 'top-headlines?';
const EVERYTHING = 'everything?';
const API_KEY = 'apiKey=8c633bf56a644d0c96bbdee21772ae72';

const News = () => {
    const [ articles, setArticles ] = useState('');
    const [ apiUrl, setApiUrl] = useState(`${ACCESS_CONTROL}${NEWS_API}${TOP_HEADLINES}country=us&${API_KEY}`);
    const [ keyWord, setKeyWord ] = useState('');

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setArticles(json.articles));
    }, [apiUrl]);

    function changeUrl(event, query) {
        if (query) {
            setArticles("");
            let q = encodeURI(query);
            setApiUrl(`${ACCESS_CONTROL}${NEWS_API}${EVERYTHING}q=${q}&${API_KEY}`);
        } else {
            setApiUrl(`${ACCESS_CONTROL}${NEWS_API}${TOP_HEADLINES}country=us&${API_KEY}`);
        }
    }

    function handleInputChange({ target: { value } }) {
        setKeyWord(value);
    }
    
    function startSearch({ key }) {
        if (key === 'Enter' && keyWord !== '') {
            changeUrl(event, keyWord);
            setKeyWord('');
        }
    }

    return (
        <>
            <RecentPagesBanner imgURL="url(../img/news.jpg)" path="News"/>
            <div className="news-wrap container">
                <div className="news">
                    {articles ?
                        articles.map(article => (
                        <Article
                            key={article.title}
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            url={article.url}
                        />
                    )) : "Загрузка"}
                </div>
                <div>
                    <div id="searchFixed">
                        <Search
                            keyWord={keyWord}
                            handleInputChange={handleInputChange}
                            startSearch={startSearch}
                        />
                        <NewsFilter changeUrl={changeUrl} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;