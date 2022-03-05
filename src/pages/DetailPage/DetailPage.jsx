import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from '@iconify/react';
import './detailpage.sass'

const DetailPage = ({match, data}) => {
  
  const idProduct = match.params.productId
  const product = data.find(item => item.id.toString() === idProduct)
  const rating = Math.ceil(product.rating.rate)

  const estrellas = Array.from(Array(rating).keys())
  
  return(
    <div className="detalle-producto">

      <div className="detalle-producto__imagen">
        <img src={`${product.image}`} alt='Imagen producto' />
        
      </div>
      <div className="detalle-producto__informacion">
        <h1 className="detalle-producto__nombre">{product.title}</h1>
        <span className="detalle-producto__precio">USD {product.price}</span>
        <p className="detalle-producto__descripcion">{product.description}</p>
        <div className="detalle-producto__datos-secundarios">
          <dl>
            <dt>valoración</dt>
            <dd>
             {estrellas.map( (estrella, index) => <Icon icon="ant-design:star-filled" key={index} />)}
            </dd>
          </dl>
          <dl>
            <dt>categoría</dt>
            <dd>{product.category}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default withRouter(DetailPage)

