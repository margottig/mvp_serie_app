import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-dark'>
        <h1 className='text-info'> Series Animadas DataBase</h1>
        <NavLink to="/todaseries"> Home </NavLink>
        <NavLink to="/nuevaserie"> Formulario Serie </NavLink>
    </div>
  )
}

export default Navbar