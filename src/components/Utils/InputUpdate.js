import React, { useState } from 'react';

const InputUpdate = ({request, setInput}) => {

    const [data, setData] = useState();

    const handleInputChange = (event) => {
        setData(event.target.value)
    }

    const newRequest = request.request;
    

    const sendForm = (event) => {

        //event.preventDefault();

        fetch('http://localhost:3001/data/user/5fb2e3414de44e534ce85a7b', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTk4MGNiMzI0NzQxMGYxZmI1YmU4NSIsImlhdCI6MTYwNTQ2MjcwM30.7TPmT0qCl-uJFOCp8xWkRUDVrDhgqloK0oiyJARasBc'
            },
            body: JSON.stringify({ [request]: data })
        }).then(res => res.json()).then((result) => { console.log(result) });

        setInput(false);
    }

    return (
        <div>
            <input 
                placeholder={"ingrese su nuevo " +request} 
                name={request} 
                onChange={handleInputChange}>
            </input>
            <a onClick={sendForm}> Actualizar</a>
        </div>
    )
}

export default InputUpdate;