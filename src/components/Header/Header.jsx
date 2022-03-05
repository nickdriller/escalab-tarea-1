import React from 'react'
import Menu from '../Menu/Menu'
import { auth } from '../../utils/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import './header.sass'

class Header extends React.Component{
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
      this.setState(this.user = currentUser)
    })
  } 

  render(){
    return(
      <header className='cabecera'>
        <div className="cabecera__identificacion">
          
          {
            !this.user ? 
            <span className="cabecera__usuario cabecera__usuario--anonimo">Usuario Anónimo</span> 
            : 
            <span className="cabecera__usuario cabecera__usuario--logueado">
              {this.user.displayName || this.user.email } <button onClick={this.handleSignOut}>cerrar sesión</button>
            </span>
          }   
        </div>
        <Menu />
      </header>
     
    )
  }
}

export default Header