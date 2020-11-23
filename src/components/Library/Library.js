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

  const handleSubmit = (event) => {
    event.preventDefault();

    //localhost:3000/data/User
    fetch('http://localhost:3001/data/book',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTQzZTcwY2U3Zjk3MmIwZDVjMjM0NyIsImlhdCI6MTYwNTYzOTIxMX0.auP3ifPMSB0mJLpFUEFVzUNSxrInEVjHVeU22TEbWfg'
      },
      body: JSON.stringify({title: data.title, author: data.author, category: data.category})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }


    return (
      <div>
            <label>Titulo del libro</label><br/>
          <input className={'input-library'} type="text" name="title" placeholder="Titulo del libro" required onChange={handleImputChange}/> <br/>
          <label>Categoria</label><br/>

          <input className={'input-library'} type="text" name="category" placeholder="Categoria del libro" required onChange={handleImputChange}/> <br/>
          <label>Autor</label><br/>
          <input className={'input-library'} type="text" name="author" placeholder="Autor del libro" required onChange={handleImputChange}/><br/>
          <button onClick={handleSubmit}>Crear libro</button>

      </div>
    )
  }
