import React from 'react'
import { auth } from '../../utils/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

class LogIn extends React.Component {
  constructor(props){
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
  }

  handleInputChanges = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  loginUser = async () => {
    const {email, password} = this.state
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    }
    catch(error){
      console.log(error.message)
    }
  }

  render(){
    return(
      <form className="formulario" onSubmit={this.handleFormSubmit}>
        <h2 className="formulario__titulo">Login you fuckin' fuck</h2>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Correo electrónico</label>
          <input type="email" className="formulario__entrada" name="email" value={this.state.email} onChange={this.handleInputChanges} />
        </div>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Contraseña</label>
          <input type="password" className="formulario__entrada" name="password" value={this.state.password} onChange={this.handleInputChanges} />
        </div>
        <div className="formulario__accion">
          <button className="boton" onClick={this.loginUser}>
            <span className="boton__texto">Iniciar sesión</span>
          </button>
        </div>
      </form>
    )
  }
}

export default LogIn