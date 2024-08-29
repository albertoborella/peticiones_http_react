import React, { useState } from 'react'
import axios from 'axios'

function CreateUser() {
    const [mensaje, setMensaje] = useState("")

    function handleUser() {
        const newUser = {
            name: "Alberto Borella",
            job: "Desarrollador",
          };
    

    axios
        .post("https://reqres.in/api/users", newUser)
        .then((response) => {
            setMensaje('Usuario creado satistactoriamente')
        })
        .catch((error) => {
            setMensaje('Fallo al crear el usuario')
            console.log('Fallo al crear nuevo usuario')
        })
    }
    
  return (
    <>
    <h2>Crear usuario</h2>
    <button onClick={handleUser}>Crear usuario</button>
    {mensaje}
    </>
  )
}

export default CreateUser