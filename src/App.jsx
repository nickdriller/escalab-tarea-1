import React from 'react'
import './App.sass'
import { Switch, Route } from 'react-router-dom'

import PRODUCT_DATA from './utils/products-data'

import Header from './components/Header/Header'

import HomePage from './pages/Homepage/HomePage'
import DetailPage from './pages/DetailPage/DetailPage'
import LogInPage from './pages/LogInPage/LogInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'



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
          <Route exact path='/'   >
            <HomePage data={data}/>
          </Route> 

          <Route exact path='/products/:productId'> 
            <DetailPage data={data} />
          </Route>

          <Route path='/login' component={LogInPage}  />
          
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </>
    )
  }
}



export default App
