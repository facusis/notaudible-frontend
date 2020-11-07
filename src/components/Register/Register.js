import React, { Fragment, useState } from 'react';
import './Register.css';

const Register = () => {

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
      <div class="login-reg-panel">
        <div class="login-info-box">
          <h2>¿Tienes cuenta?</h2>
          <label id="label-register" for="log-reg-show">Iniciar Sesión</label>
          <input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked" />
        </div>
                  
        <div class="register-info-box">
          
        </div>
                  
        <div class="white-panel">
          <div class="register-show">
            <h2>REGISTER</h2>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password" />
            <input type="button" value="Register" />
          </div>
        </div>
      </div>
      </form>
    </Fragment>
  )
}

export default Register;