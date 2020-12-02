import React, { useState, useRef } from "react";
import SelectRequest from '../Utils/SelectRequest';
import './UploadBook.css';

const UploadBook = () => {
  
  const [data, setData] = useState({});
  const [category, setCategory] = useState()
  const fileInputEl = useRef(null);

  const handleImputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (files) => {
    const url = `http://localhost:3001/track`;

    if (files) {
      const formData = new FormData();

      formData.append('track', files[0]);
      formData.append('name', data.title);
      formData.append('title', data.title);
      formData.append('category', category);
      formData.append('author', data.author);

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
  }

  return (
    <div>
      <br></br>
        <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleImputChange}/> <br/>
        <label>Categoria</label><br/>
        <SelectRequest setCategory={setCategory} request="category"></SelectRequest><br/>
        <label>Autor</label><br/>
        <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleImputChange}/><br/>
        <label className="upload_button" htmlFor="fileupload">
          Upload 
              <input
                type="file"
                id="fileupload"
                accept=".mp3,audio/*"
                ref={fileInputEl}
              />
        </label>
            <div>
            <button onClick={() => handleSubmit(fileInputEl.current.files)}>UpLoad</button>
          </div>
    </div>
  )
}

export default UploadBook;