import React from 'react'
import { useState, useEffect } from "react";
import noImage from '../InfoAudioLibro/noImage.png';

export const BookCard = (props) => {

    console.log(props.title);

    const [isImage, setIsImage] = useState(false);

    useEffect(() => {    
        if (props && props.urlimage){
        setIsImage(true);};
    });


    return (
        <div className="BoxSingleBook">
                <div className="boxImage">
                   <img className="BookImageLibrary" src={ isImage ? props.urlimage : noImage }></img>
               </div>

           {props.title}

        </div>
    )
}
