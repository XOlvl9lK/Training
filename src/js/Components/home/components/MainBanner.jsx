import React from 'react';
import CirclePhoto from '../../../../img/circle-photo.jpg'

const MainBanner = () => {

    return (
            <div className="main-banner">
                <div className="banner-info container">
                    <img src={CirclePhoto} alt=""/>
                    <h1>Hello, I'm Photographer</h1>
                    <h3>Photographer</h3>
                </div>
            </div>
    );
};

export default MainBanner;