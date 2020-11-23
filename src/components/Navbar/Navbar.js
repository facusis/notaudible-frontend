import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='nav-links'>Home</Link>
                <Link to="/biblioteca" className='nav-links'>Bibliotecas</Link>
                <Link to="/register" className='nav-links'>Register</Link>
                <Link to="/login" className='nav-links'>Login</Link>
                
            </div>
        </nav>
    )
}

export default Navbar;