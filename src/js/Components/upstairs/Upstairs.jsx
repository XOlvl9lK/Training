import React, { useEffect } from 'react';

const Upstairs = () => {
    useEffect(() => {
        window.addEventListener('scroll', showUpstairs);
    }, []);

    function showUpstairs() {
        if (window.pageYOffset > 100) {
            document.querySelector(".upstairs").classList.add("upstairs-show");
        }
        if (window.pageYOffset < 100) {
            document.querySelector(".upstairs").classList.remove("upstairs-show");
        }
    }

    function handleUpstairs() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -50);
            setTimeout(handleUpstairs, 0);
        }
    }

    return (
        <div onClick={handleUpstairs} className="upstairs"><span className="icon-angle-up" /></div>
    );
};

export default Upstairs;