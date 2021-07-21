import React from 'react';

const NewsFilter = ({ changeUrl }) => (
    <nav className="news-filter">
        <h2 onClick={event => changeUrl(event, '')}>All Categories</h2>
        <p onClick={event => changeUrl(event, 'covid')}>&#8250;<span>Covid-19</span></p>
        <p onClick={event => changeUrl(event, 'nasa')}>&#8250;<span>NASA</span></p>
        <p onClick={event => changeUrl(event, 'policy')}>&#8250;<span>Policy</span></p>
        <p onClick={event => changeUrl(event, 'trump')}>&#8250;<span>Trump</span></p>
        <p onClick={event => changeUrl(event, 'games')}>&#8250;<span>Games</span></p>
        <p><a href="https://developer.nytimes.com/" target="_blank">Powered by New York Times API</a></p>
    </nav>
);

export default NewsFilter;