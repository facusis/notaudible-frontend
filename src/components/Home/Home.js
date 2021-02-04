import React, { Fragment } from 'react';
import "./Home.css";
import foto1 from "./libros.jpg";
import LogoInicio from "../Navbar/logo.jpeg";

const Home = () => {
    
  return (
    <Fragment>
    <div class="main">
      <div class="slider" id="slider">
        <div class="slides current">
          <h1>Escucha todo tipo</h1>
          <h1>de audiolibro</h1>
        </div>
      </div>
    </div>

    <div className="fondo-logo">
      <img src={LogoInicio} height="50%" width="50%" />
    </div>
    
    <div id="contenedor-bloque">
        <div class="bloque">
        <img src={foto1} height="100%" width="100%" />
        </div>
        <div class="bloque">
            <img src={foto1} height="100%" width="100%" />
        </div>
        <div class="bloque">
        <img src={foto1} height="100%" width="100%" />
        </div>
    </div>
    </Fragment>
  )
}

export default Home;