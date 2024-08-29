import axios from 'axios'
import React, { useState, useEffect } from 'react'



const GetUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      axios
        .get("https://reqres.in/api/users")
        .then((response) => {
            setUsers(response.data.data)
        })
        .catch((error) => {
            alert('Ha ocurrido un error', error)
        })
      },[])
    
  return (
    <>
    <h2>Listado de Usuarios</h2>
    {users ? (
            users.map((usuario) => (
                <div key={usuario.id}>
                    <p>Nombre: {usuario.first_name}{usuario.last_name} | Email: {usuario.email} </p>
                    <img src={usuario.avatar} alt={usuario.first_name} />
                </div>
            ))
        ) 
        : (
            <h3>Loading...</h3>
        )
    }
    </>
  )
}

export default GetUsers
