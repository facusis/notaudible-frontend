import React, { useState } from "react";
import SelectRequest from '../Utils/SelectRequest';
import {fetchResource} from "../../api";
import './UploadBook.css';

const UploadBook = () => {
  
  const [data, setData] = useState({});
  const [category, setCategory] = useState()

  const handleImputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetchResource('upload','','POST', {
            title: data.title, 
            author: data.author, 
            category: category
        }).then((result) => {console.log(result)});
    }

    return (
      <div>
          <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleImputChange}/> <br/>
          <label>Categoria</label><br/>
          <SelectRequest setCategory={setCategory} request="category"></SelectRequest><br/>
          <label>Autor</label><br/>
          <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleImputChange}/><br/>
          <button onClick={handleSubmit}>Crear libro</button>
      </div>
    )
  }

export default UploadBook;