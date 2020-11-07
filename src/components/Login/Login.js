import React, { Fragment, useState } from 'react';
import './Login.css';

function Login() {

  const [datos, setDatos] = useState({
    email: '',
    nickname: '',
    password: ''
  });

  const handleImputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const sendForm = (event) => {
    event.preventDefault();
    console.log(datos.email + ' ' + datos.password);

    //localhost:3000/data/User
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email: datos.email, password: datos.password })
    }).then(res => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", JSON.stringify(result.token));
        if (!localStorage.getItem("token")) {
          window.alert("No se ha guardado token");
        } else {
          window.alert(JSON.stringify(result.token));
        }
      });
  };
  return (
    <Fragment>
      <form onSubmit={sendForm}>
      <div class="login-reg-panel">

        <div class="login-info-box">
          <input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked" /> 
        </div>
							
        <div class="register-info-box">
          <h2>¿No tienes cuenta?</h2>
          <label id="label-login" for="log-login-show">Registrate</label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>

			</div>		

      <div class="white-panel">
        <div class="login-show">
          <h2>LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value="Login" />
          <a href="">Forgot password?</a>
        </div>
      </div>

      </form>
    </Fragment>
  );
}

export default Login;