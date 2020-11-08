import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

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
    <form onSubmit={sendForm}>
      <div class="login-reg-panel-1">
        <div class="login-info-box-1">
          <h2>¿Tienes alguna cuenta?</h2>
          <label id="label-register" for="log-reg-show-1" onClick={handleClick}><b>Inicia Sesión</b></label>
        </div>	
							
        <div class="white-panel-r">
          <div class="register-show">
            <h2 className="titulo">Registrarse</h2>
            <input type="text" placeholder="Correo Electronico" onClick={handleInputChange}/>
            <input type="text" placeholder="Usuario" onClick={handleInputChange}/>
            <input type="password" placeholder="Contraseña" onClick={handleInputChange}/>
            <input type="button" value="Register" onClick={handleInputChange}/>
          </div>
        </div>
	    </div>
    </form>
    </Fragment>
  )
}

export default Register;