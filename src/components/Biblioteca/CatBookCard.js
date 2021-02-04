import React from 'react'
import { useState, useEffect } from "react";
import { BookCard } from './BookCard';
import {fetchResource} from "../../api";
import { Link, useHistory } from "react-router-dom";

export const CatBookCard = (props) => {
    const history = useHistory();
    const category = props && props.idCat;
    const [books, setBooks] = useState();
    const [isBook, setIsBook] = useState(false);


    const isThereBooks = () => {
        if (typeof books !== 'undefined' && books.length > 0)
        setIsBook(true);
    };


    useEffect(() => {    
    
        fetchResource('user/booksbycategory', '', 'POST', {category: category})
            .then(result => {
                isThereBooks();
                setBooks(result)});  
    }, []);



 return (
        <div className="BooksInCategory">

            {books && books.map(each => {
                        
                        const bookId = each && each._id;
                        console.log(bookId);
                        function handleClick() {
                                    history.push(`/InfoAudioLibro/${bookId}`);
                                };
                        
                    return <Link 
                                onClick={handleClick}
                                >
                                    <BookCard
                                    title={each.title}
                                    author={each.author}
                                    urlimage={each.urlimage}
                                    />
                                    </Link>
                        
                            }
                            ) }
       
        </div>
    )
}
