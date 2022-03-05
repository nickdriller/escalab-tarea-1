import React from 'react'
import { Link } from 'react-router-dom'

import menu from '../../assets/images/logo.svg'
import './menu.sass'

const Menu = () => (
  <nav className="menu">
    <ul className="menu__grupo menu__grupo--izquierda">
      <li>
        <Link className="menu__link" to='/'>Home</Link>
      </li>
    </ul>

    <div className="menu__logo">
      <img src={menu} alt="Logo Tienda" />
    </div>

    <ul className="menu__grupo menu__grupo--derecha">
      <li>
        <Link className="menu__link" to='/login'>Inicio Sesión</Link>
      </li>
      <li>
        <Link className="menu__link" to='/signup'>Registro</Link>
      </li>
    </ul>
  </nav>
)

export default Menu