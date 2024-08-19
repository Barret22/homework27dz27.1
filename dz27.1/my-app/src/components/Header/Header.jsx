import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav-link">Головна</Link>
                <Link to="/contacts" className="nav-link">Контакти</Link>
                <Link to="/about" className="nav-link">Про мене</Link>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
                {currentTheme === 'light' ? 'Темна тема' : 'Світла тема'}
            </button>
        </header>
    );
};

export default Header;
