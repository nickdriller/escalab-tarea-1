import React from 'react'
import { Link } from 'react-router-dom'
import './product.sass'

const Product = ({title, image, price, category, productId}) => {
  
  return(
    <article className="producto">
      <div className="producto__contenido">
        <div className="producto__imagen">
          <span className="producto__etiqueta">{category}</span>
          <img src={image} alt={title} />
        </div>
        <div className="producto__informacion">
          <h3 className="producto__nombre">{title}</h3>
          <span className="producto__precio">USD {price}</span>

          <Link className="producto__accion" to={`/products/${productId}`} >
            Ver Producto
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Product