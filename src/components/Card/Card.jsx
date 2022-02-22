import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, image, category, productId}) => {
  

  return(
  
  <div className="card">
    <div className="card__image">
      <span className="card__tag">{category}</span>
      <img src={image} alt={title} />
    </div>
    <span className="card__title">{title}</span>
    <Link className="card__action" to={`/products/${productId}`} >
      Ver Producto
    </Link>
  </div>
)}
export default Card