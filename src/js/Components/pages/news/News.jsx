import React, { useState, useEffect } from 'react';
import RecentPagesBanner from "../../recentPagesBanner/RecentPagesBanner.jsx"
import Search from "./components/Search.jsx";
import NewsFilter from "./components/NewsFilter.jsx";
import Loading from "./components/Loading.jsx";
import NewsPage from "./components/NewsPage.jsx";

export const ACCESS_CONTROL = 'https://cors-anywhere.herokuapp.com/';
export const NEWS_API = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=relevance&page=0';
export const TOP_HEADLINES = 'top-headlines?';
export const EVERYTHING = 'everything?';
export const API_KEY = 'api-key=YwCdKi4UdW7GqtZiNfMELgG2bYu84cOz';
export const DEFAULT_PATH = `${NEWS_API}&${API_KEY}`;

const News = () => {
    const [ articles, setArticles ] = useState('');
    const [ apiUrl, setApiUrl] = useState(DEFAULT_PATH);
    const [ keyWord, setKeyWord ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(0);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setArticles(json.response.docs));
    }, [apiUrl]);

    function changeUrl(event, query) {
        if (query) {
            if (!query) {
                setApiUrl(DEFAULT_PATH);
            }
            setArticles('');
            setApiUrl(`${NEWS_API}&q=${query}&${API_KEY}`);
        } else {
            setApiUrl(DEFAULT_PATH);
        }
    }

    function handleInputChange({ target: { value } }) {
        setKeyWord(value);
    }
    
    function startSearch({ key }) {
        if (key === 'Enter' && keyWord !== '') {
            changeUrl(event, keyWord);
            setKeyWord('');
            setCurrentPage(0);
        }
    }

    return (
        <>
            <RecentPagesBanner
                imgURL="url(img/news.jpg)"
                path="News"
            />
            <div className="news-wrap container">
                <div className="news">
                    {articles ?
                        <NewsPage
                            articles={articles}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    : <Loading />}
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