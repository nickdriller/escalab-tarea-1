import React from 'react'
import Product from '../../components/Product/Product'

const HomePage = ({data}) => {
  return(

    <div className="productos">
      {data
        .map( ({id, ...otherDataProps}) => (
          <Product key={id} productId={id} {...otherDataProps} />
          )
        )
      }
    </div>
  )
}
  
export default HomePage