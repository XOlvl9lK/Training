import React from 'react';
import RecentPagesBanner from "../recentPagesBanner/RecentPagesBanner.jsx";
import MyServices from "./components/MyServices.jsx";
import Packages from "./components/Packages.jsx";

const Services = () => (
    <>
        <RecentPagesBanner imgURL="url(../img/services-banner.jpg)" path="Services" />
        <MyServices />
        <Packages />
    </>
);

export default Services;