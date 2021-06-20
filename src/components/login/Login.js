import React, { Component } from 'react';
import '../../styles/global.scss';
import Input from '../input/Input';
import { Link } from 'react-router-dom';
export default class Login extends Component {
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
            <form  className="login__form>">
            <Input
              tipo="email"
              placeholder="Ingrese correo electrónico"
            />
            {false && <p>Debe ser un correo electronico</p>}
              <br/>
              <Input
              tipo="password"
              placeholder="Ingrese contreseña"
            />
              <br/>
              <p className="login__form--text">¿Olvidó su contraseña?</p>
              <br/>
              <button className="login__form--btn" type="submit">INICIO DE SESIÓN</button>
              <br/>
              <p className="login__form--text">¿No tiene una cuenta?</p>
              <br/>
              <Link to='/register'>
                <button className="login__form--btn">CREAR UNA CUENTA</button>
              </Link>
            </form>
          </div>
        </div>
      </>
    )
  }
}
