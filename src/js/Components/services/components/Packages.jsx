import React from 'react';
import PackageCard from "./PackageCard.jsx";

const Packages = () => (
    <div className="packages container">
        <h1>See Our Packages</h1>
        <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
            turpis sodales quis. Integer sit amet mattis quam.
        </p>
        <div className="our-packages">
            <PackageCard title="Personal" price="199.00"/>
            <PackageCard title="Advance" price="299.00"/>
            <PackageCard title="Platinum" price="399.00"/>
        </div>
    </div>
);

export default Packages;