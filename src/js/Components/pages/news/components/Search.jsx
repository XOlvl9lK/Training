import React, { useEffect } from 'react';

const Search = ({ keyWord, handleInputChange, startSearch }) => {

    useEffect(() => {
        window.addEventListener('scroll', makeSearchFixed);
    }, []);

    function makeSearchFixed() {
        if (window.pageYOffset > 265) {
            document.querySelector('#searchFixed').classList.add("search-fixed");
        }
        if (window.pageYOffset < 265) {
            document.querySelector('#searchFixed').classList.remove("search-fixed");
        }
    }

    return (
        <div className="search" onClick={() => console.log(window.pageYOffset)}>
            <h2>Search</h2>
            <input
                type="text"
                placeholder="Write a keyword"
                value={keyWord}
                onChange={handleInputChange}
                onKeyPress={startSearch}
            />
        </div>
    );
};

export default Search;