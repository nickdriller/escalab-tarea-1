import React from 'react'
import { useParams } from 'react-router-dom'
import PRODUCT_DATA from '../../utils/products-data'


const DetailPage = () => {
  const data = PRODUCT_DATA
  const {productId} = useParams()
  
 
  if(productId){
    return(
      <h2>{data[productId-1].title}</h2>
    )
  }
 
}

export default DetailPage