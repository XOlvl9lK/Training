import React from 'react';

const Callback = () => (
    <div className="callback container">
        <form >
            <textarea cols="30" rows="1" placeholder="Name" />
            <textarea cols="30" rows="1" placeholder="Email" />
            <textarea className="last-textarea" cols="30" rows="5" placeholder="Message" />
            <button>Submit Now</button>
        </form>
        <div className="coords">
            <div>
                <span className="icon-location" />
                <p>PO Box 1212, London, UK</p>
            </div>
            <div>
                <span className="icon-envelope-open" />
                <p>info@example.com</p>
            </div>
            <div>
                <span className="icon-volume-control-phone" />
                <p>+7-800-999-800</p>
            </div>
            <div>
                <span className="icon-file-pdf-o" />
                <p>Download Resume</p>
            </div>
        </div>
    </div>
);

export default Callback;