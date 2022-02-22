import React from 'react'
import Card from '../../components/Card/Card'
import PRODUCT_DATA from '../../utils/products-data'



class HomePage extends React.Component{
  constructor(props){
    super()

    this.state = {
      data: PRODUCT_DATA
    }
  }
  
  render(){
    
    const {data} = this.state
    
    return(
      <div className="container">
        {data
          .map( ({id, ...otherDataProps}) => (
            <Card key={id} productId={id} {...otherDataProps} />
            )
          )
        }
      </div>
    )
  }
}


export default HomePage