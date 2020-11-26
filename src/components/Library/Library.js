import React, { useState } from "react";
import './Library.css';
import SelectRequest from '../Utils/SelectRequest';

export default function Library() {
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
    console.log(category);

    fetch('http://localhost:3001/upload',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmM2OGYyNjZjNWRhYjgxNWExM2I2YyIsImlhdCI6MTYwNjE4MzYzOX0.68JNkWLmClPi5QyH7Kq8zw7SjfoAXx_dG5HOVScGDN0'
      },
      body: JSON.stringify({title: data.title, author: data.author, category: category})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }


    return (
      <div>
            <label>Titulo del libro</label><br/>
          <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleImputChange}/> <br/>
          <label>Categoria</label><br/>
          <SelectRequest setCategory={setCategory} request="category"></SelectRequest><br/>
          <label>Autor</label><br/>
          <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleImputChange}/><br/>
          <button onClick={handleSubmit}>Crear libro</button>

      </div>
    )
  }
