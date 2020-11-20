import React, { useState } from "react";
import './Library.css';

export default function Library() {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleImputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const token = localStorage.getItem("token");

  console.log(data);


    return (
      <div>
          <form className={'form-library'}>
            <label>Titulo del libro</label><br/>
          <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleImputChange}/> <br/>
          <label>Titulo del libro</label><br/>

          <input className={'input-library'} type="text" name="category" placeholder="Categoria del libro" required onChange={handleImputChange}/> <br/>
          <label>Autor</label><br/>
          <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleImputChange}/><br/>
          <button type="submit">Crear libro</button>
          </form>

      </div>
   
    )
  }