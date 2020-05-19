import React from 'react';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Upstairs from "./upstairs/Upstairs.jsx";

const App = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Upstairs />
            <Footer />
        </>
    );
};

export default App;

