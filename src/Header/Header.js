import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-bar d-flex justify-content-evenly border'>
        <h2 className='mt-3'>Globe Explorers</h2>
     <nav className='mt-3'>
        <Link to='/'>Home</Link>
        <a href="#about">About</a>
        <Link to='shop'>Shop</Link>
        <Link to='packages'>Packages</Link>
        <a href="#reviews">Reviews</a>
        <Link to='login' bg="secondary">Login</Link>
     </nav>
    </div>
    );
};

export default Header;