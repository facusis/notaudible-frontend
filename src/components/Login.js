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
    console.log(datos.email + ' ' + datos.nickname)
  }

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={sendForm}>
        <div>
            Ingrese Email<br></br>
          <input placeholder="example@example.com" type="text" name="email" onChange={handleImputChange}></input>
        </div>
        <div>
            Ingrese NickName<br></br>
          <input placeholder="Example123" type="text" name="nickname" onChange={handleImputChange}></input>
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