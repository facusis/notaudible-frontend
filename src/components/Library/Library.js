import React, { useState } from "react";
import './Library.css';

export default function Library() {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const token = localStorage.getItem("token");

  console.log(data);


    return (
      <div>
          <form>
          <input type="text" name="title" className="titulo-libro" placeholder="Titulo del libro" required onChange={handleInputChange}/> 
          <input type="text" name="category" placeholder="Categoria del libro" required onChange={handleInputChange}/>
          <input type="text" name="author" placeholder="Autor del libro" required onChange={handleInputChange}/>
          <button type="submit">Crear libro</button>
          </form>

      </div>
   
    )
  }