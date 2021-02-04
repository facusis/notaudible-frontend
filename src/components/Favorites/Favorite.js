import React, {useState, useEffect} from 'react'
import heartEmpty from './heartEmpty.svg';
import heartFull from './heartFull.svg';
import {fetchResource} from "../../api";
import './Favorite.css';


const Favorite = (props) => {


//logic to check whether it is favourite or not after fetching favourites data

const [refreshHeart, setRefreshHeart] = useState(true);

const [favourite, setFavourite] = useState(false);

        useEffect(() => {    
 
            fetchResource('user/favouritesearch', '', 'POST', {bookId: props.bookId, userId: localStorage.getItem('id')})
                .then(result => { 
                  const first = Object.values(result)[0];
                  setFavourite(first)});
                  setRefreshHeart (false);
            
        }, [refreshHeart]);


console.log(favourite);


// Create entity 

const makeFavourite = (event) => {      
    fetchResource('user/favourite','','POST', {
      userId: localStorage.getItem('id'),
      bookId: props.bookId,
    }).then((result) => {
       setFavourite(true);
       setRefreshHeart(true);
       
    });
  }


// Delete entity 

const deleteFavourite = (event) => { 

    fetchResource('data/favourite', favourite._id,'DELETE', {
      
    }).then((result) => {
        console.log(result);
       setFavourite(false);
       setRefreshHeart (true);
    });
  }

 
  /**fetchResource(`data/favourite?bookId=${props.bookId}&&userId=${localStorage.getItem('id')}`,'','GET', {
    }).then((result) => {
        console.log(result);
       setIsFavourite(true);
       // props.setRefresh(true);
    }); */


    return ( 
        <div className="love">
            {favourite ? (<a className="love"><img src={heartFull} onClick={deleteFavourite} alt="This book is among your favourite books list"/></a>) :
            (<a><img  src={heartEmpty} className="love" alt="This book is not among your favourite books list" onClick={makeFavourite}/></a>)}
        </div>
    );
}
 
export default Favorite;