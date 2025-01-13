// src/components/HeaderUpdated.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoWhite.png'; // Assuming the logo is stored in assets
import NavBar from './NavBar';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/">
                <img src={logo} alt="DesignHouse Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>
            <NavBar />
            <Link to="/contact">
        <button className="findus">Get in Touch</button>
      </Link>
        </header>
    );
};

export default Header;