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
      <h1>Register</h1>
      <form onSubmit={sendForm}>
      <div class="login-reg-panel">
		<div class="login-info-box">
			<h2>Have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-register" for="log-reg-show">Login</label>
			<input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked" />
		</div>
							
		<div class="register-info-box">
			<h2>Don't have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-login" for="log-login-show">Register</label>
			<input type="radio" name="active-log-panel" id="log-login-show" />
		</div>
							
		<div class="white-panel">
			<div class="register-show">
				<h2>REGISTER</h2>
				<input type="text" placeholder="Email"/>
				<input type="text" placeholder="Nickname" />
				<input type="password" placeholder="Password"/>
				<input type="button" value="Register" />
			</div>
		</div>
	</div>
      </form>
      <button type="button" onClick={handleClick}>Go home</button>
    </Fragment>
  )
}

export default Register;