import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
        <header className="header">
            <nav className="container">
                <ul className="navbar">
                    <Link exact="true" to='/'><h1>My Website</h1></Link>
                    <div className="navlink">
                        <li><Link exact="true" to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li className="drop-menu">
                            <p className="arrow">Pages <span>&#9660;</span></p>
                            <div>
                                <Link to="/news">News</Link>
                                <Link to="/blog">Blog</Link>
                            </div>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
);


export default Header;