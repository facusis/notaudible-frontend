import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {isLogin, logOut} from '../../utils/loginUtils';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                
                {isLogin() ? 
                    <div className='nav-links'> 
                        <Link to="/" >Home</Link>
                        <Link to="/biblioteca" >Bibliotecas</Link>
                        <Link to="/upload"> Subir Audiolibro </Link> 
                        <Link to="/perfil"> Perfil </Link> 
                        <Link className="nav-cerrarsesion" to="/perfil" onClick={logOut}> Cerrar Sesión </Link> 
                    </div> : 
                    <div className='nav-links'> 
                        <Link to="/" >Home</Link>
                        <Link to="/biblioteca" >Bibliotecas</Link>
                        <Link to="/register"> Register </Link>
                        <Link className="nav-login" to="/login"> Login </Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;