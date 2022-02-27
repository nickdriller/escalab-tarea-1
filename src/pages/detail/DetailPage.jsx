import React from 'react'
import { withRouter } from 'react-router-dom'

const DetailPage = ({match, data}) => {
  
  const idProduct = match.params.productId
  const product = data.find(item => item.id.toString() === idProduct)
  
  return(
    <div className="detalle-producto">
      <h1>{product.title}</h1>
      <div className="detalle-producto__imagen">
        <img src={`${product.image}`} alt='Imagen producto' />
        <span className="detalle-producto__etiqueta">{product.category}</span>
        <div className="detalle-producto__rating">{product.rating.rate}</div>
        <p className="detalle-producto__description">{product.description}</p>
        <p className="detalle-producto__valor">USD {product.price}</p>
      </div>
    </div>
  )
}

export default withRouter(DetailPage)