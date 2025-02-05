import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container">
                    <Link to="/" className="logo-container">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="header-logo"
                            alt="Logo"
                        />
                    </Link>
                    <div className="button-container">
                        <Link
                            to="#"
                            className="header-button header-button-login"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="header-button header-button-get-started"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="nav-links-container">
                        <ul className="header-nav-links">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active-link"
                                    className="header-nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeClassName="active-link"
                                    className="header-nav-link"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    activeClassName="active-link"
                                    className="header-nav-link"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    activeClassName="active-link"
                                    className="header-nav-link"
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
