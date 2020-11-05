import React, { Fragment, useState } from 'react';

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
    fetch('http://localhost:3000/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({email: datos.email, password: datos.password})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }

  return (
    <Fragment>
      <h1>Register</h1>
      <form onSubmit={sendForm}>
        <div>
            Ingrese Email<br></br>
          <input placeholder="example@example.com" type="text" name="email" onChange={handleInputChange}></input>
        </div>
        <div>
            Ingrese NickName<br></br>
          <input placeholder="Example123" type="text" name="nickname" onChange={handleInputChange}></input>
        </div>
        <div>
            Ingrese Password<br></br>
          <input placeholder="••••••" type="text" name="password" onChange={handleInputChange}></input>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Register;