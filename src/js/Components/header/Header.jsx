import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
        <header className="header">
            <nav className="container">
                <ul className="navbar">
                    <Link exact="true" to='/Training/'><h1>My Website</h1></Link>
                    <div className="navlink">
                        <li><Link exact="true" to='/Training/'>Home</Link></li>
                        <li><Link to='/Training/about/'>About</Link></li>
                        <li><Link to='/Training/services/'>Services</Link></li>
                        <li className="drop-menu">
                            <p className="arrow">Pages <span>&#9660;</span></p>
                            <div>
                                <Link to="/Training/news/">News</Link>
                                <Link to="/Training/blog/">Messages</Link>
                            </div>
                        </li>
                        <li><Link to='/Training/contact/'>Contact</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
);


export default Header;