import React, { useState, useEffect } from 'react';
import './Favorite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import { fetchResource } from '../../api';

const Favorite = () => {

  const [favoritos, agregarFavoritos] = useState(false)

  useEffect( () => {
    console.log('useEffect listo')
  }, [favoritos])

  const FavButton = () => {
    //  solo fetch con userid y libroid

  }

    return ( 
        <div>
            <button className='botonFav' onClick= {FavButton} >
                <FontAwesomeIcon icon={faBook} size="2x" /> 
                
            </button>
                
        </div>

    );
}
 
export default Favorite;