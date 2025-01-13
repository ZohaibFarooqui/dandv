import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
        <Link to="/">
          <img src='src/assets/logo.png' alt="Devs and Visuals" className="logo-img" />
        </Link>
      </div>
            <h1>DesignHouse</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
