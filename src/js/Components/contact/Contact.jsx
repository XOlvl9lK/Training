import React from 'react';
import RecentPagesBanner from "../recentPagesBanner/RecentPagesBanner.jsx";
import Callback from "./components/Callback.jsx";
import Map from "./components/Map.jsx";

const Contact = () => (
    <>
        <RecentPagesBanner imgURL="url(../img/contact.jpg)" path="Contact" />
        <Callback />
        <Map />
    </>
);

export default Contact;