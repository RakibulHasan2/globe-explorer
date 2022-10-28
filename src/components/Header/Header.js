import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaHiking } from 'react-icons/fa';
const Header = () => {

    const [stateRouteName, setStateRouteName] = useState('home')
    const setRouteInSession = (route_name) => {
        setStateRouteName(route_name)
    }

    return (
        <div className={`${stateRouteName === 'home' ? 'header-custom-style-home' : 'header-custom-style'}`}>
            <h2 className='mt-3 fs-bold'> <FaHiking className='icon'></FaHiking> Globe Explorers</h2>
            <nav className='mt-3 '>
                <Link to='/home' onClick={() => setRouteInSession('home')}>Home</Link>
                <a href="/about" onClick={() => setRouteInSession('about')}>About</a>
                <Link to='/shop' onClick={() => setRouteInSession('shop')}>Shop</Link>
                <Link to='/packages' onClick={() => setRouteInSession()}>Packages</Link>
                <a href=" " onClick={() => setRouteInSession()}>Reviews</a>
                <Link to='/login' onClick={() => setRouteInSession()}>Login</Link>
            </nav>
        </div>
      
    );
};

export default Header;