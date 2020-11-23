import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';

const Login = () => {

  let history = useHistory();

  function handleClickR() {
    history.push("/register");
  }

  function handleClickO() {
    history.push("/login/forgetPass");
  }
 
  //Mostrar constraseña
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [datos, setDatos] = useState( {
    email: '',
    nickname: '',
    password: ''
  })

  const handleImputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendForm = (event) => {
    event.preventDefault();
    console.log(datos.email + ' ' + datos.password)

    //localhost:3000/data/User
    fetch('http://localhost:3001/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({email: datos.email, password: datos.password})
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
  }
  return (
    <Fragment>
    <div className="body-1">
      <form onSubmit={sendForm}>
      <div className="login-reg-panel">
      <div className="logo-l"></div>			
              <div className="register-info-box">
                <h2 className="nocuenta">¿No tienes cuenta?</h2>
                <label id="label-login" for="log-login-show" onClick={handleClickR}>Registrarse</label>
              </div>
              <div className="white-panel">
                <div className="login-show">
                  <h2>Iniciar Sesión</h2>
                  <input type="text" name="email" placeholder="Correo Electrónico" required onChange={handleImputChange}/>
                  <input  type={passwordShown ? "text" : "password"} name="password" placeholder="Contraseña" required onChange={handleImputChange}/>
                  <i onClick={togglePasswordVisiblity} className="ver"><img src="https://image.flaticon.com/icons/png/512/65/65000.png" className="eye" /></i>{" "}
                  <input type="submit" value="Iniciar Sesión" />
                  <a className="olvidado" onClick={handleClickO}>¿Te has olvidado la contraseña?</a>
                </div> 
              </div>


            </div>
      </form>
      </div>
    </Fragment>
  )
}

export default Login;