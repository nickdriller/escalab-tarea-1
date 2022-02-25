import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({title, image, category, productId}) => {
  
  return(
  
    <div className="product">
      <div className="product__image">
        <span className="product__tag">{category}</span>
        <img src={image} alt={title} />
      </div>
      <span className="product__title">{title}</span>
      <Link className="product__action" to={`/products/${productId}`} >
        Ver Producto
      </Link>
    </div>
  )
}

export default Product