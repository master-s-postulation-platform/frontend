import React, { Component, useState, useEffect } from 'react';
import '../../styles/global.scss';
import Input1 from '../input/Input1';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context';


const Login = (props) => {
  const location = useLocation();
  console.log(location.pathname);

  const history = useHistory()

  const dispatch = useAuthDispatch();
  const {loading, errorMessage} = useAuthState();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    
    let payload = {email, password}
    
    try {
      let response = await loginUser(dispatch, payload);
      
      console.log(response)
      
      if (response.error === true) {
        alert(response.message)
        return;
      } else {
        // props.history.push('/dashboard');
        console.log('Test');
        // history.push('/dashboard');
        history.push('/dashboard');

      }
    } catch(error) {
      console.log(error)
    }
  }



  return (
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
            <Input1
              tipo="email"
              placeholder="Ingrese correo electrónico"
              estado={email}
              cambiarEstado={setEmail}
            />
            {false && <p>Debe ser un correo electronico</p>}
              <br/>
              <Input1
                tipo="password"
                placeholder="Ingrese contreseña"
                estado={password}
                cambiarEstado={setPassword}
              />
              <br/>
              <p className="login__form--text">¿Olvidó su contraseña?</p>
              <br/>
              <button className="login__form--btn" type="submit" onClick={handleLogin}>INICIO DE SESIÓN</button>
              <br/>
              <p className="login__form--text">¿No tiene una cuenta?</p>
              <br/>
              <Link to='/register'>
                <button className="login__form--btn" >CREAR UNA CUENTA</button>
              </Link>
            </form>
          </div>
        </div>
      </>
  )
}

export default Login

