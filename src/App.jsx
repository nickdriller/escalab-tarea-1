import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import HomePage from './pages/homepage/HomePage'
import CategoryPage from './pages/category/CategoryPage'
import SubcategoryPage from './pages/subcategory/SubcategoryPage'
import DetailPage from './pages/detail/DetailPage'



const App = () => {
  
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/category' component={CategoryPage}/>
        <Route exact path='/products' component={SubcategoryPage}/>
        <Route exact path='/products/:productId' component={DetailPage}/>
      </Switch>
      
      <Footer/>
    </>
  )
}

export default App
