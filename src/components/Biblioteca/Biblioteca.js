import React from 'react';
import { useState, useEffect } from "react";
import {fetchResource} from "../../api";
import "./Biblioteca.css";
import {CatBookCard} from "./CatBookCard";
import {SearchBar} from './SearchBar';


const Biblioteca = () => {

    const [category, setCategory] = useState();

    useEffect(() => {
        fetchResource('data/category','','GET').then(result => { setCategory(result) });
    }, []);

    
    //No funciona con controller especifico?
    // useEffect(() => {
    //     fetchResource('user/library','','POST', '', {bookId:''}).then(result => { setAllBooks(result) });
    // }, []);

    return (
        <div className="BoxSearch">
        <div className="BoxLibrary">
            <div className="BoxLibrary"><SearchBar/></div>
                <div className="BoxCategory">
                    {category && category.map(cat => {
                        
                        return <div className="BoxCategory">
                                <h3>{cat.name}</h3>
                                <div className="BoxBooksInCategory">
                                        <CatBookCard
                                            idCat = {cat._id}
                                            
                                        /> </div>
                        </div>
                        })}
                </div>
        </div>
        </div>
    );
};

export default Biblioteca;