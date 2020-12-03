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
      category: category,
      
    }).then((result) => {console.log(result)});
  }

  return (
      
    <div className={"uploadForm"}>
      <label className={"labelUpload tituloUpload"}>
        SUBE UN LIBRO
      </label><br/>
      <label className={"labelUpload"}>
        Titulo
      </label><br/>
      <input 
        className={'input-library'} 
        type="text" 
        name="title"
        required 
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Categoria
      </label><br/>
      <SelectRequest 
        setCategory={setCategory} 
        request="category">
      </SelectRequest><br/>
      <label className={"labelUpload"}>
        Autor
      </label><br/>
      <input 
        className={'input-library'} 
        type="text" 
        name="author" 
        required 
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Sinopsis
      </label><br/>
      <textarea 
        className={'sinopsis'} 
        type="text" 
        name="sinopsis" 
        required onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Archivo
      </label><br/>
      <input 
        className={'input-library'} 
        type="file" 
        name="archivo"
        required 
        onChange={handleImputChange}
        /><br/>
      <button 
        className={"submitButton"}
        onClick={handleSubmit}>
        Crear libro
      </button>
    </div>

  )
}

export default UploadBook;