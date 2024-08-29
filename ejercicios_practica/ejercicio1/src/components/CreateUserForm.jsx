import React, { useState } from 'react'
import axios from 'axios'

const CreateUserForm = () => {
    const [mensaje, setMensaje] = useState("")

function handleReset() {
    setMensaje("")
}

function handleSubmit(e) {
    e.preventDefault()
    const user = {
        nombre: e.target.nombre.value,
        trabajo: e.target.trabajo.value
    }
    if (!user.nombre || !user.trabajo) {
        setMensaje('Completa los datos del usuario');
        return
    }
    axios
        .post("https://reqres.in/api/users", user)
        .then((response) => {
            setMensaje('Usuario creado con éxito')
        })
        .catch((error) => {
            setMensaje('Error al crear el usuario')
            console.log(error)
        })
    
}


  return (
    <>
    <h2>Nuevo Usuario</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type='text' name='nombre' /><br/>
        <label htmlFor="trabajo">Trabajo:</label>
        <input type='text' name='trabajo' /><br/>

        <input type='submit' value='Crear usuario' />
        <input type='reset' value='Resetear usuario' onClick={handleReset} />
    </form>
    {mensaje}
    </>
  )
}

export default CreateUserForm