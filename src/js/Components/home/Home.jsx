import React from 'react';
import MainBanner from "./components/MainBanner.jsx";
import Welcome from "./components/welcome/Welcome.jsx";
import Job from "./components/Job.jsx";
import WhatIDo from "./components/whatIDo/WhatIDo.jsx";
import Practice from "./components/Practice.jsx";
import Review from "./components/review/Review.jsx";

const Home = () => {

    return (
        <>
            <MainBanner />
            <Welcome />
            <Job />
            <WhatIDo />
            <Practice />
            <Review />
        </>
    );
};

export default Home;