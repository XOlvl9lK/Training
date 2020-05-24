import React from 'react';

const PackageCard = ({ title, price }) => (
    <div className="package-card">
        <h1>{title}</h1>
        <p>Lifetime Usage</p>
        <p>3 Months Support & Updates</p>
        <p>1 Website License</p>
        <p>Quickstart Included</p>
        <p>Access to Templates & Extensions</p>
        <p>Branding/Copyright Removal</p>
        <p className="price">$ {price}</p>
        <button>Get Started</button>
    </div>
);

export default PackageCard;