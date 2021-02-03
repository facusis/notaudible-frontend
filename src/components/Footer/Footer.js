import React from 'react';
import './Footer.css';
import Facebook from "./img/facebook.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagrm.png";

const footer = () => {
    return (
       <>
        <div className={"main-footer"}>
            <div className="container">        
                    <div className="cole">
                        <h2 className="barcelona">BARCELONA</h2>
                            <ul className="list-unstyled">
                                <li>Carrer Padilla 78.</li>
                                <li>TEL: 123 456 789</li>
                                <li>08011 Barcelona.</li>
                            </ul>
                    </div>
                    
                    <div className="col1">
                        <h2 className="barcelona"> SOCIAL NETWORKS </h2>
                            <ul className="list-unstyled1">
                                <li> <img src={Facebook} height="3%" width="3%" className="logosrs"/> </li>
                                <li> <img src={Instagram} height="3%" width="3%" className="logosrs"/> </li>
                                <li> <img src={Twitter} height="3%" width="3%" className="logosrs"/> </li>
                            </ul>
                    </div>
            
        </div>
            <div className="rowe"> 
                <p className="col-small"> Copyright © 2020 NOTAUDIBLE INC. <a className= "letras" href="https://nuclio.school/politica-de-privacidad/"> Política de privacidad y cookies - </a> <a className= "letras" href="https://nuclio.school/condiciones-legales/"> Aviso legal </a> </p>
                <br></br>
            </div> 
        </div>
         
       </>
    )
};

export default footer;

