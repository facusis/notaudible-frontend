import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import { fetchResource } from '../../api';

const Favorite = () => {

  const addFavorite = () => {
      
  }


    return ( 
        <div>
            <button className='botonFav' onClick= {addFavorite}>
                <FontAwesomeIcon icon={faBook} size="2x"/>
                
            </button>
                
        </div>

    );
}
 
export default Favorite;