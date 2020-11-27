import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {isLogin, logOut} from '../../utils/loginUtils';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='nav-links'>Home</Link>
                <Link to="/biblioteca" className='nav-links'>Bibliotecas</Link>
                {isLogin() ? 
                    <div className='nav-links'> 
                        <Link to="/upload"> Subir audiolibro </Link> 
                        <Link to="/perfil"> Perfil </Link> 
                        <Link className="nav-cerrarsesion" to="/perfil" onClick={logOut}> Cerrar Sesión </Link> 
                    </div> : 
                    <div className='nav-links'> 
                        <Link to="/register"> Register </Link>
                        <Link className="nav-login" to="/login"> Login </Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;