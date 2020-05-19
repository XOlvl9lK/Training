import React from 'react';
import Skills from "./Skills.jsx";

const Welcome = () => (
    <div className="welcome container">
        <h1>Welcome To My Site</h1>
        <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
            turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Nulla mollis dapibus nunc
        </p>
        <Skills />
    </div>
);

export default Welcome;