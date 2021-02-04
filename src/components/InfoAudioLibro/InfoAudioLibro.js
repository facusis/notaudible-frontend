import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './InfoAudioLibro.css';
import { fetchResource } from "../../api";
import { AddComment } from '../AddComment/AddComment';
import { CommentsViewer } from '../CommentsViewer/CommentsViewer';
import TrackPlayer from '../TrackPlayer/TrackPlayer';
import Favorite from '../Favorites/Favorite';
import noImage from './noImage.png';

const InfoAudioLibro = () => {

    const {bookId} = useParams();
    const [data, setData] = useState();
    //let {bookId} = useParams()
    const [refresh, setRefresh] = useState(true);
    const [isImage, setIsImage] = useState(false);

    useEffect(() => {    
 
        fetchResource('user/getbook', bookId, 'GET')
            .then(result => {
                setData(result); 
                if (result && result.urlimage){
                setIsImage(true);
                setRefresh(false);
            };
        
    });
}, [])

    return (
    <div className="boxPagina">
        <div>
            <div className="boxInfo">
                <div className="bookBoxImage">
                   
                    <img className="BookImage" src={ isImage ? data.urlimage : noImage }></img>
                    <div className="FavouriteIcon"><Favorite bookId={bookId}/></div>
                    
                </div>
                <div className="bookBoxText">
                    <div className="TitleBox">{data && data.title}</div>
                    <div className="AuthorBox">Autor/a: {data && data.author}</div>
                    <div className="CategoryBox">Categoria: {data && data.category && data.category.name}</div>
                    <div className="CreatedByBox">Creado por: {data && data.user.nickname}</div>
                    <div className="DescriptionBox">{data && data.sinopsis}</div>
                </div>
                <CommentsViewer
                        bookId={bookId}
                        bookTitle={data && data.title}
                        refresh={refresh}
                        setRefresh={setRefresh}/>
                    <TrackPlayer
                        author={data && data.author}
                        title={data && data.title}
                        fileId={data && data.file}/>
                <div className="AddCommentBox">
                    <AddComment
                        bookId={bookId}
                        setRefresh={setRefresh}
                        refresh={refresh}/>
                </div>
            </div>
            
        </div>
        </div>
    )
};

export default InfoAudioLibro;

