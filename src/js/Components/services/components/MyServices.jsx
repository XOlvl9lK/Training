import React from 'react';
import allServices from "./allServices";

const MyServices = () => (
    <div className="my-services-wrap">
        <div className="my-services container">
            <h1>My Services</h1>
            <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
            </p>
            <div className="all-services">
                {allServices.map(service => (
                    <div key={service.id} className="service">
                        <span className={service.iconClass} />
                        <div>
                            <h2>{service.serviceTitle}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt
                            </p>
                            <h3>Read more &rsaquo;</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MyServices;