import React, {useState, useEffect} from 'react';
import {fetchResource} from "../../api";
import { Link, useHistory } from "react-router-dom";


export const FavouriteList = props => {

    const history = useHistory();


    

    //Fetch list of favourited audiobooks
    
    const userNumber = props && props.userId;


    const [favouriteList, setFavouriteList] = useState();
    
            useEffect(() => {    
     
                fetchResource('user/favouritesbyUser', '', 'POST', {userId: userNumber})
                    .then(result => { 
                      setFavouriteList(result)});
            }, []);
    
        return ( 
            <div className="containerbox1">
                <h3 className="h3g">Tus libros favoritos</h3>
                    <ul className="listbooks">
                    {favouriteList && favouriteList.map(fav => {
                        //link to specific audiobook
                        
                        const bookId = fav.bookId._id;
                        function handleClick() {
                            history.push(`/InfoAudioLibro/${bookId}`);
                          }
                          
                        return <Link onClick={handleClick}> <div className="favlist"> {fav.bookId.title} de {fav.bookId.author}</div> </Link>
                        
                        })}
                    </ul>            
            </div>
        );
    }
     