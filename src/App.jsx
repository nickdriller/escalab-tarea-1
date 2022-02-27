import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PRODUCT_DATA from './utils/products-data'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import HomePage from './pages/homepage/HomePage'
import CategoryPage from './pages/category/CategoryPage'
import SubcategoryPage from './pages/subcategory/SubcategoryPage'
import DetailPage from './pages/detail/DetailPage'
import Product from './components/Product/Product'
import SignInUp from './components/SignInUp/SignInUp'

class App extends React.Component{
  constructor(props){
    super()

    this.state = {
      data: PRODUCT_DATA
    }
  }
  
  render(){
    
    const {data} = this.state
    
    return(
      <>
        <Header />

        <Switch>
          <Route exact path='/' >
            {data
              .map( ({id, ...otherDataProps}) => (
                <Product key={id} productId={id} {...otherDataProps} />
                )
              )
            }
          </Route> 
          <Route path='/category' component={CategoryPage}/>
          <Route exact path='/products' component={SubcategoryPage}/>
          <Route exact path='/products/:productId'> 
            <DetailPage data={data} />
          </Route>
          <Route path='/signinup' component={SignInUp} />
        </Switch>
        
        <Footer/>
      </>
      // <div className="container">
      //   {data
      //     .map( ({id, ...otherDataProps}) => (
      //       <Product key={id} productId={id} {...otherDataProps} />
      //       )
      //     )
      //   }
      // </div>
    )
  }
}



export default App
