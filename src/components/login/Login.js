import React, { Component, useState, useEffect } from 'react';
import '../../styles/global.scss';
import Input1 from '../input/Input1';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (!validateFields) {
      console.log('Escriba su usuario y contraseña')
    } else {
      login()
    }
  }

  const validateFields = () => {
    
    if (email === "" || password === "") {
      console.log('Escriba su usuario y contraselña')
      return false;
    } else {
      
      return true;
    }
  }

  const login = () => {

    let request = {
      "email": email,
      "password": password,
    }

    fetch('https://api.hardmakers.com/api/v1/token/login',{
        method: 'POST', 
        body: JSON.stringify(request), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      // .then(response => {
      //   console.log(response.status)
      //   if (response.status === 200) {

      //     return response
      //   } else {
      //     console.log('Error')
      //     /* var error = "error"; */
      //   }
      // })
      // .then(data => {
      //   console.log(data.json())
      // })
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data))
        alert(JSON.stringify(data))
        // history.push('/profile');
      })
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
              <button className="login__form--btn" type="submit" onClick={handleClick}>INICIO DE SESIÓN</button>
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

