import React, { useState, useRef } from "react";
import SelectRequest from '../Utils/SelectRequest';
import './UploadBook.css';

const UploadBook = () => {

  const [data, setData] = useState({});
  const [category, setCategory] = useState();
  const fileInputEl = useRef(null);
  const API_URL = "https://notaudible.herokuapp.com"
  
  
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }



  const handleSubmit = (files) => {
    const url = `${API_URL}/track`;

    if (files) {
      const formData = new FormData();

      formData.append('track', files[0]);
      formData.append('name', data.title);
      formData.append('title', data.title);
      formData.append('category', category);
      formData.append('author', data.author);
      formData.append('urlimage', data.urlimage);
      formData.append('sinopsis', data.sinopsis);
      formData.append('user', localStorage.getItem('id'));
 
      const options = {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`
        },
        mode: 'cors',
      };

      fetch(url, options)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(data);

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
        onChange={handleInputChange}
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
        onChange={handleInputChange}
      /><br/>

      <label className={"labelUpload"}>
        Sinopsis
      </label><br/>
      <input 
        className={'sinopsis'} 
        type="text" 
        name="sinopsis" 
        
        onChange={handleInputChange}
      /><br/>
      <label className={"labelUpload"}>
        Archivo
      </label><br/>
      <input 
        className={'input-library'} 
        type="file"
        id="fileupload"
        accept=".mp3,audio/*"
        ref={fileInputEl}
        required
        /><br/>

      <label className={"labelUpload"}>
        Carátula (url)
      </label><br/>
      <input 
        className={'input-urlimage'} 
        type="text" 
        name="urlimage" 
        
        onChange={handleInputChange}
        /><br/>

      <button 
        className={"submitButton"}
        onClick={ () => handleSubmit(fileInputEl.current.files) }>
        Crear libro
      </button>
    </div>
  )
}

export default UploadBook;
