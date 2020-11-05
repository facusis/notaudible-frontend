import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a className='nav-links'>Home</a>
                <a className='nav-links'>Bibliotecas</a>
                <a className='nav-links'>Register</a>
                <a className='nav-links'>Login</a>
            </div>
        </nav>
    )
}

export default Navbar;