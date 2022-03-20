import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to this website</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;