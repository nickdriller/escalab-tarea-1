import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import './menu.sass'

class Menu extends React.Component{
  constructor(props){
    super()

    this.state = {
      user: null
    }
  }
  handleSignOut = async () =>{
    await signOut(auth)
    this.setState({
      user: null
    })
  }

  componentDidMount(){
    onAuthStateChanged(auth, (currentUser) => {
      console.log('currentUser', currentUser)
      this.setState(this.user = currentUser)
    })
  } 

  render(){
    return(
      <nav className="menu">
        <ul className="menu__group">
          <li className="menu__item">
            <Link to='/'>Home</Link>
          </li>
          <li className="menu__item">
            <Link to='/category'>Categoría</Link>
          </li>
          <li className="menu__item">
            <Link to='/products'>Subcategoría</Link>
          </li>
          <li className="menu__item">
            <Link to='/login'>Inicio Sesión</Link>
          </li>
          <li className="menu__item">
            <Link to='/signup'>Registro</Link>
          </li>
          <li className="menu__item menu__item--login">
            {!this.user ? 'Usuario Anonimo' : <button onClick={this.handleSignOut}>{this.user.displayName}Sign out</button>}   
          </li>

          
        </ul>
      </nav>
    )
  }
}


export default Menu