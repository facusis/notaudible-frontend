import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
       <>
        <div className={"main-footer"}>
            <div className="container">        
                    <div className="cole">
                        <h2>BARCELONA</h2>
                            <ul className="list-unstyled">
                                <li>Carrer Padilla 78.</li>
                                <li>TEL: 123 456 789</li>
                                <li>08011 Barcelona.</li>
                            </ul>
                    </div>
                    <div className="col1">
                        <h2> SOCIAL NETWORKS </h2>
                            <div className="list-unstyled1">
                                <a href="https://www.facebook.com/AudibleES/?brand_redir=90486735811">  <FontAwesomeIcon className= "icono" icon={faFacebook}  /> </a>
                                <a  href="https://www.instagram.com/audible/?hl=es"><FontAwesomeIcon className= "icono" icon={faInstagram} /></a>
                                <a href="https://open.spotify.com/artist/0pk95otj3wM2dlj76O988X"> <FontAwesomeIcon className= "icono" icon={faSpotify} /> </a>
                            </div>
                    </div>
            
        </div>
            <div className="rowe"> 
                <p className="col-small"> Copyright © 2020 NOTAUDIBLE INC. <a className= "letras" href="https://nuclio.school/politica-de-privacidad/"> Política de privacidad y cookies - </a> <a className= "letras" href="https://nuclio.school/condiciones-legales/"> Aviso legal </a> </p>
                <br></br>
                <p className="frase"> 
                MADE WITH <FontAwesomeIcon icon={faHeart} style={{ color: '#b48484' }}/> BY US </p>
            </div> 
        </div>
         
       </>
    )
};

export default footer;

