import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Handle screen resize to update isMobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setShowDropdown(false);
    };

    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 auto' }}>
                    <NavLink exact to="/" activeClassName="active" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        Home
                    </NavLink>
                </li>
                <li style={{ margin: '0 auto' }}>
                    <NavLink to="/about" activeClassName="active" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        About Us
                    </NavLink>
                </li>
                <li
                    style={{ margin: '0 auto', position: 'relative', paddingTop: 21 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => isMobile && setShowDropdown(!showDropdown)} // Toggle dropdown on mobile
                >
                    <span
                        style={{
                            color: '#ffffff',
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
                                position: isMobile ? "relative" : "absolute",
                                top: isMobile ? "auto" : "100%",
                                left: 0,
                                background: 'white',
                                flexDirection: 'column',
                                padding: '10px 0',
                                margin: 0,
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                listStyle: 'none',
                                zIndex: 9999,
                                width: isMobile ? "170%" : "200px",
                                textAlign: isMobile ? "center" : "left"
                            }}
                        >
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/web-development" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Web Development
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/app-development" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    App Development
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/graphic-design" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Graphic Designing
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/animations" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Animation
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/ebook" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    E-Book
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/digital-marketing" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Digital Marketing
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/pay-per-click" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Pay Per Click
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/business-analysis" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Business Analysis
                                </NavLink>
                            </li>
                            <li style={{ padding: '10px' }}>
                                <NavLink to="/project-management" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>
                                    Project Management
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li style={{ margin: '0 auto' }}>
                    <NavLink to="/projects" activeClassName="active" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s ease' }}>
                        Our Work
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
