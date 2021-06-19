import React from 'react';
import '../../styles/global.scss';

class Login extends React.Component {
  render() {
    return(
      <>
        <div className="login">
          <h3 className="login__title">
            Inicio de sesión
          </h3>
          <div className="login__container">
          <h4 className="login__container--title">
            Ingrese la siguiente información:
          </h4>
            <form className="login__form>">
              <input className="login__form--input" type="email" placeholder="Ingrese correo electrónico"/>
              <br/>
              <input className="login__form--input" type="password" placeholder="Ingrese contraseña"/>
              <br/>
              <p className="login__form--text">¿Olvidó su contraseña?</p>
              <br/>
              <button className="login__form--btn" type="submit">INICIO DE SESIÓN</button>
              <br/>
              <p className="login__form--text">¿No tiene una cuenta?</p>
              <br/>
              <button className="login__form--btn" type="submit">CREAR UNA CUENTA</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login;