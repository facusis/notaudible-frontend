import React from 'react'
import { useState, useEffect } from "react";
import {fetchResource} from "../../api";
import {ResultList} from "./ResultList";

export const SearchBar = () => {
    
    const [nameSearch, setNameSearch] = useState();
    const handleChange = (e) => {
        setNameSearch(e.target.value)
      };



    const [result, setResult] = useState();

    const [showSearch, setShowSearch] = useState(false);

      const handleSubmit = () => {   
        
        fetchResource(`user/searchbook/${nameSearch}`, '', 'GET')
        .then(response => {
            setResult(response);
            setShowSearch(true);
        });
      }

    return (
        <div className="BoxSearchSection">
          <input 
          className={'namesearch'} 
          type="text" 
          name="namesearch" 
          placeholder={"«Título»"}
          onChange={handleChange}
          /><br/>
  
        <button 
          className={"raise"}
          onClick={ () => handleSubmit() }>
          Encuentra!
        </button>
        <div>{showSearch ? <ResultList result={result}/> : null }</div>

 </div>
    )
}
