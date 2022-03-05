import React from 'react'
import Product from '../../components/Product/Product'

const CategoryPage = ({data}) => {
  return(

    <div className="productos">
      {data
        .map( ({id, productCategory, ...otherDataProps}) => (
          <Product key={id} productCategory={productCategory} {...otherDataProps} />
          )
        )
      }
    </div>
  )
}
  
export default CategoryPage