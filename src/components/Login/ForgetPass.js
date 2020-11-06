import React, { Fragment, useState } from 'react';

const ForgetPass = () => {

  const [datos, setDatos] = useState( {
    email: '',
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendForm = (event) => {
    event.preventDefault();
    console.log(datos.email)

    //localhost:3000/data/User
    fetch('http://localhost:3001/forgetpass',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({email: datos.email})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }

  return (
    <Fragment>
      <h1>Recuperar contraseña</h1>
      <form onSubmit={sendForm}>
        <div>
            Ingrese Email<br></br>
          <input placeholder="example@example.com" type="text" name="email" onChange={handleInputChange}></input>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Fragment>
  )
}

export default ForgetPass;