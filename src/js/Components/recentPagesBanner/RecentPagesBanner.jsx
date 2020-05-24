import React from 'react';

const RecentPagesBanner = ({ imgURL, path }) => (
    <div className="recent-pages-banner" style={{backgroundImage: imgURL}}>
        <div className="path container">
            <span>Home / {path}</span>
        </div>
    </div>
);

export default RecentPagesBanner;