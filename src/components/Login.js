import React, { Fragment, useState } from 'react';

const Login = () => {

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
      <h1>Login</h1>
      <form onSubmit={sendForm}>
        <div>
            Ingrese Email<br></br>
          <input placeholder="example@example.com" type="text" name="email" onChange={handleImputChange}></input>
        </div>
        <div>
            Ingrese Password<br></br>
          <input placeholder="••••••" type="text" name="password" onChange={handleImputChange}></input>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Login;