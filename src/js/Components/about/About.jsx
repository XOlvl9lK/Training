import React from 'react';
import AboutMe from "./components/AboutMe.jsx";
import RecentPagesBanner from "../recentPagesBanner/RecentPagesBanner.jsx";
import AboutWelcome from "./components/AboutWelcome.jsx";
import AboutStats from "./components/AboutStats.jsx";
import AboutSubscribe from "./components/AboutSubscribe.jsx";


const About = () => (
    <>
        <RecentPagesBanner imgURL="url(../img/practice.jpg)" path="About"/>
        <AboutMe />
        <AboutWelcome />
        <AboutStats />
        <AboutSubscribe />
    </>
);

export default About;