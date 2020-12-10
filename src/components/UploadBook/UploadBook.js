/* 

import React, { useRef, useState } from 'react';

const UploadBook = () => {
    const [titleEl, setTitleEl] = useState('');
    const fileInputEl = useRef(null);

    const onBookSelected = (files) => {
      const url = `http://localhost:3001/upload`;
      const title = titleEl;
      if (files) {
        const formData = new FormData();

        formData.append('book', files[0]);
        formData.append('name', title);

        const options = {
          method: 'POST',
          body: formData,
          headers: new Headers({}),
          mode: 'cors',
        };

        fetch(url, options)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
            return Promise.reject(response.status);
          })
          .then((payload) => {
            console.log(`Saved book with id: ${payload}`);
          })
          .catch((error) => console.log(error));
      }
    };

    return (
      <div>
        <div className="form_line">
          <p path="title">Title:</p>
          <input
            type="text"
            onChange={(e) => setTitleEl(e.target.value)}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <label className="upload_button" htmlFor="fileUpload">
          Upload
        <input
            type="file"
            id="fileUpload"
            accept=".mp3,audio/*"
            ref={fileInputEl}
            onChange={() => onBookSelected(fileInputEl.current.files)}
          />
        </label>
      </div>
    );
  };
*/ 

  import React, { useState } from "react";
  import SelectRequest from '../Utils/SelectRequest';
  import {fetchResource} from "../../api";
  import './UploadBook.css';
  
  const UploadBook = () => {
    
    const [data, setData] = useState({});
    const [category, setCategory] = useState()
  
    const handleInputChange = (event) => {
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
            <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleInputChange}/> <br/>
            <label>Categoria</label><br/>

            {/* how does this syntax work? */}
            <SelectRequest setCategory={setCategory} request="category" /><br/>
            <label>Autor</label><br/>
            <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleInputChange}/><br/>
            <button onClick={handleSubmit}>Crear libro</button>
        </div>
      )
    }
  

  export default UploadBook;
