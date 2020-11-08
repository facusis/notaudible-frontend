import React, { Fragment, useState } from 'react';
import "./Home.css";

const Home = () => {

  const [datos, setDatos] = useState( {
    email: '',
    nickname: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendForm = (event) => {
    event.preventDefault();
    console.log(datos.email + ' ' + datos.password)

    //localhost:3000/data/User
    fetch('http://localhost:3001/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({email: datos.email, password: datos.password, nickname: datos.nickname})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }

  return (
    <Fragment>
        <div>
            <div className="home">
                <img src='' alt="Cinque Terre" width="1000" height="300"></img>
            </div>
            <div>
                <div className="bloque-izquierdo">
                    Hola a todos
                </div>
                <div className="bloque-derecho"></div>
            </div>
        </div>
      
    </Fragment>
  )
}

export default Home;