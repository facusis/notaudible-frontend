import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

const Favorite = () => {

    


    return ( 
        <div>
            <button className='botonFav'> fav 
                <FontAwesomeIcon icon={faBook} />
                
            </button>
                
        </div>

    );
}
 
export default Favorite;