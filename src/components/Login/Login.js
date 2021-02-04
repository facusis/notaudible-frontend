import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {fetchResource} from "../../api";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogedContext from '../../LogedContext';

const Login = () => {

  let history = useHistory();
  const loged = useContext(LogedContext);

  function handleClickR() {
    history.push("/register");
  }

  function handleClickO() {
    history.push("/login/forgetPass");
  }
 
  //Mostrar constraseña
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
		
    fetchResource('login','','POST', {
			email: datos.email, 
			password: datos.password
		}).then((result) => {
      if (!result.token) {
        window.alert("No se ha guardado token");
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("id", result.id);
        loged.setLoged(true);
        history.push("/biblioteca");
      }
    });
  }

  return (
    <Fragment>
      <div className="body-1">
        <div className="container-fluid">
          <div className="login-reg-panel">
            <div className="logo-l">
            </div>			
              <div className="register-info-box">
                <h5 className="nocuenta">¿No tienes cuenta?</h5>
                <label id="label-login" for="log-login-show" onClick={handleClickR}>Registrarse</label>
              </div>
              <div className="white-panel">
                <div className="login-show">
                  <h2>Iniciar Sesión</h2>
                  <input type="text" name="email" placeholder="Correo Electrónico" required onChange={handleInputChange}/>
                  <input  type={passwordShown ? "text" : "password"} name="password" placeholder="Contraseña" required onChange={handleInputChange}/>
                  <i onClick={togglePasswordVisibility} className="ver"><img src="https://image.flaticon.com/icons/png/512/65/65000.png" className="eye" /></i>{" "}
                  <input type="submit" value="Iniciar Sesión" onClick={sendForm} />
                  <a className="olvidado" onClick={handleClickO}>¿Te has olvidado la contraseña?</a>
                </div> 
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;