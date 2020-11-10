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
    <div className="body-1">
    <form onSubmit={sendForm}>
      <div class="login-reg-panel-1">
a
        <div className="logo"></div>
        
        <div class="login-info-box-1">
            <h2 className="tienecuenta">¿Tienes alguna cuenta?</h2>
            <label id="label-register" className="inc" for="log-reg-show-1" onClick={handleClick}><b>Iniciar Sesión</b></label>
        </div>	
                
        <div class="white-panel-r">
            <div class="register-show">
              <h2 className="titulo">Registrarse</h2>
              <input type="text" name="email" placeholder="Correo Electrónico..." onClick={handleInputChange} required/>
              <input type="text" name="nickname" placeholder="Usuario..." onClick={handleInputChange} required/>
              <input type="password" name="password" placeholder="Contraseña..." onClick={handleInputChange}required/><b>*</b>
              <input type="submit" value="Registrarse" onClick={handleInputChange}/>
            </div>
        </div>

	    </div>
    </form>
    </div>
    </Fragment>
  )
}

export default Register;