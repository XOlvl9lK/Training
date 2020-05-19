import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <nav className="container">
            <ul className="navbar">
                <Link exact to='/'><h1>My Website</h1></Link>
                <div className="navlink">
                    <li><Link exact to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/pages'>Pages</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </div>
            </ul>
        </nav>
    </header>
);


export default Header;