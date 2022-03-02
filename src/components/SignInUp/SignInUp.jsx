import React from 'react'
import { auth } from '../../utils/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


class SignInUp extends React.Component{
  constructor(props){
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState( {[name]: value} )
  }

  registerUser = async () => {
    const {displayName, email, password, confirmPassword} = this.state

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password, displayName )
      console.log('user', user)
      
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.log(error.message)

    }

  }

  render(){
    const {displayName, email, password, confirmPassword} = this.state
    return(
      <form className="formulario" onSubmit={this.handleSubmit}>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Nickname</label>
          <input className="formulario__entrada" value={displayName} name="displayName" onChange={this.handleChange} />
        </div>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Correo</label>
          <input className="formulario__entrada" type="email" value={email} name="email" onChange={this.handleChange}/>
        </div>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Contraseña</label>
          <input className="formulario__entrada" type="password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className="formulario__item">
          <label className="formulario__etiqueta">Confirmar Contraseña</label>
          <input className="formulario__entrada" type="password" value={confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
        </div>
        <div className="formulario__accion">
          <button className="boton boton--cta" onClick={this.registerUser}>
            <span className="boton__texto" type="button">Registrarme</span>
          </button>
        </div>
      </form>
    )
  }
}

export default SignInUp