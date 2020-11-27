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
<<<<<<< HEAD
                <Link to="/register" className='nav-links'>Register</Link>
                <Link to="/login" className='nav-links'>Login</Link>    
                <Link to="/library" className='nav-links'>Library</Link>    
=======
                {isLogin() ? 
                    <div className='nav-links'> 
                        <Link to="/perfil"> Perfil </Link> 
                        <Link to="/perfil" onClick={logOut}> Cerrar Sesión </Link> 
                    </div> : 
                    <div className='nav-links'> 
                        <Link to="/register"> Register </Link>
                        <Link to="/login"> Login </Link>
                    </div>
                }
>>>>>>> dbe687704ffc10a8b6d767d9272d52aa74f069e6
            </div>
        </nav>
    )
}

export default Navbar;