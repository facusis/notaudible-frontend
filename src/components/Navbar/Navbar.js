import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {isLogin, logOut} from '../../utils/loginUtils';
import LogedContext from '../../LogedContext';

const Navbar = () => {

    const loged = useContext(LogedContext);

    useEffect(() => {
        console.log(loged.loged);
    }, [loged.loged]);

    const trueLogOut = () =>{
        logOut()
        loged.setLoged(false);
    }

    return (
        <header class="header">
            {isLogin() ? 
                <ul class="main-nav"> 
                    <li><Link className="item" to="/" >Home</Link></li>
                    <li><Link className="item" to="/biblioteca" >Bibliotecas</Link></li>
                    <li><Link className="item" to="/upload"> Subir Audiolibro </Link> </li>
                    <li><Link className="item button" to="/perfil"> Perfil </Link> </li>
                    <li><Link className="item button secondary" to="/perfil" onClick={trueLogOut}> Cerrar Sesión </Link></li> 
                </ul> 
            :
                <ul class="main-nav"> 
                        <li><Link className="item" to="/" >Home</Link></li>
                        <li><Link className="item" to="/biblioteca" >Bibliotecas</Link></li>
                        <li><Link className="item button" to="/register"> Register </Link></li>
                        <li><Link className="item button secondary" to="/login"> Login </Link></li>
                </ul>
            }
            <img src="logo.jpeg" height="50px" width="150px"></img>
        </header>
    )
}

export default Navbar;