import React, { useState, useEffect } from 'react';
import Article from "./Article.jsx";

const NewsPage = ({ currentPage, setCurrentPage, articles }) => {
    const [ newsPage, setNewsPage ] = useState([]);

    useEffect(() => {
        setNewsPage(fillNewsPage(currentPage));
    }, [currentPage]);

    function fillNewsPage(currentPage) {
        let pages = [];
        for (let i = currentPage; i < currentPage + 4; i++) {
            if (i >= articles.length) {
                break;
            }
            pages.push(
                <Article
                    key={articles[i].abstract}
                    title={articles[i].abstract}
                    description={articles[i].lead_paragraph}
                    urlToImage={articles[i].multimedia[0].url}
                    url={articles[i].web_url}
                />
            )
        }
        return pages;
    }

    let pagination = [];
    for (let i = 0; i < Math.ceil(articles.length / 4); i++) {
        if (i === 0) {
            pagination.push(
                <p key={articles[i].abstract} onClick={event => handlePageChange(event, i)} className="page-number page-number-active">
                    {i+1}
                </p>
            )
        } else {
            pagination.push(
                <p key={articles[i].abstract} onClick={event => handlePageChange(event, i)} className="page-number">
                    {i+1}
                </p>
            )
        }
    }

    function handlePageChange(event, page) {
        document.querySelector('.page-number-active').classList.toggle('page-number-active');
        setCurrentPage(page * 4);
        event.target.classList.toggle('page-number-active');
        upstairs();
    }

    function upstairs() {
        if (pageYOffset > 250) {
            window.scrollBy(0, -15);
            setTimeout(upstairs, 0);
        }
    }

    return (
        <>
            {newsPage}
            <div className="pagination">
                {pagination}
            </div>
        </>
    );
};

export default NewsPage;