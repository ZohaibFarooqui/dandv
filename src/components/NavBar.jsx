import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 auto' }}>
                    <NavLink exact to="/" activeClassName="active" style={{ color: '#aaa', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        Home
                    </NavLink>
                </li>
                <li style={{ margin: '0 auto' }}>
                    <NavLink to="/about" activeClassName="active" style={{ color: '#aaa', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        About Us
                    </NavLink>
                </li>
                <li
                    style={{ margin: '0 auto', position: 'relative', paddingTop: 21 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span
                        style={{
                            color: '#aaa',
                            textDecoration: 'none',
                            fontSize: '18px',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        Services
                    </span>
                    {showDropdown && (
                        <ul
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: '#fff',
                                padding: '10px 0',
                                margin: 0,
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                listStyle: 'none',
                                zIndex: 1000,
                            }}
                        >
                            <li style={{ padding: '5px 15px' }}>
                                <NavLink to="/web-development" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Web Development
                                </NavLink>
                            </li>
                            <li style={{ padding: '5px 15px' }}>
                                <NavLink to="/graphic-design" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Graphic Designing
                                </NavLink>
                            </li>
                            <li style={{ padding: '5px 15px' }}>
                                <NavLink to="/app-development" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    App Development
                                </NavLink>
                            </li>
                            <li style={{ padding: '5px 15px' }}>
                                <NavLink to="/animations" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Animation
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li style={{ margin: '0 auto' }}>
                    <NavLink to="/projects" activeClassName="active" style={{ color: '#aaa', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        Our Work
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
