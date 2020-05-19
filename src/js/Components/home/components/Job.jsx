import React from 'react';

const Job = () => (
    <div className="job-banner">
        <div className="job container">
            <h1>I'm Available For Hire</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.</p>
            <div className="abilities">
                <div className="ability">
                    <div className="ability-title">
                        <span className="icon-paint-brush"></span>
                        <h2>Design</h2>
                    </div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                </div>
                <div className="ability">
                    <div className="ability-title">
                        <span className="icon-ils"></span>
                        <h2>Marketing</h2>
                    </div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                </div>
                <div className="ability">
                    <div className="ability-title">
                        <span className="icon-camera"></span>
                        <h2>Photography</h2>
                    </div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                </div>
            </div>
        </div>
    </div>
);

export default Job;