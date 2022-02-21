import React from 'react'
import { Link } from 'react-router-dom'
import './menu.sass'

const Menu = () => (
  <nav className="menu">
    <ul className="menu__group">
      <li className="menu__item">
        <Link to='/'>Home</Link>
      </li>
      <li className="menu__item">
        <Link to='/category'>Categoría</Link>
      </li>
      <li className="menu__item">
        <Link to='/subcategory'>Subcategoría</Link>
      </li>
      
    </ul>
  </nav>
)

export default Menu