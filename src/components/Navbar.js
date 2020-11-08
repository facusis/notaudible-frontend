import React from 'react';
import { useHistory } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    let history = useHistory();

    function handleClickHome() {
        history.push("/home");
    }

    function handleClickRegister() {
        history.push("/register");
    }

    function handleClickLogin() {
        history.push("/login");
    }
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a className='nav-links' onClick={handleClickHome}>Home</a>
                <a className='nav-links'>Bibliotecas</a>
                <a className='nav-links' onClick={handleClickRegister}>Register</a>
                <a className='nav-links' onClick={handleClickLogin}>Login</a>
            </div>
        </nav>
    )
}

export default Navbar;