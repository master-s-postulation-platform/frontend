import React, {useState, useEffect} from 'react';
import '../../styles/global.scss';
import Input1 from '../input/Input1';
import Modal from '../Modal';
import { useHistory } from 'react-router-dom';

const Register = () => {

  const [email, cambioEmail] = useState('');
  const [password, cambioPassword] = useState('');
  const [password2, cambioPassword2] = useState('');
  const [result, cambioResult] = useState(null);

  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }


  let history = useHistory();

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:  /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
  }
  /* Esta es la funcion para comparar el password con el otro revisar si son iguales */
  const validarPassword2 = () => {
    if (password.length > 0){
      if(password !== password2){
        console.log('Las contraseñas no son iguales')
        return false
      } else {
        console.log('Las contraseñas son iguales')
        return true
      }
    }
  }

  const sendRegister = () => {
    
      let request = {
        "email": email,
        "password": password,
        "re_password": password2
      }  

      fetch('https://api.hardmakers.com/api/v1/users/',{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(request), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.status)
        if (response.status === 201) {
          history.push('/login');
        } else {
          console.log('Error')
          setActive(true)
          /* {<Modal active={active} toggle={toggle}>
            El correo ya existe
          </Modal>} */
          /* var error = "error"; */
        }
      })
      .then(data => {
        console.log(data)
      })
      // .then(()=>{
      //   let test = {
      //       "email": "jcpablo100@gmail.com"
      //   }

      //   if (test === email) {
      //     console.log('correo creado con éxito')
      //   }
      // })

  
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    
    if (!validarPassword2()) {
      console.log('password no son iguales')
    }
    else {
      sendRegister()
    }
  }

    return(
      <>
        <Modal active={active} toggle={toggle}>
            El correo ya existe
          </Modal>
        <div className="register">
          <h3 className="register__title">
            Registro
          </h3>
          <div className="register__container">
          <h4 className="register__container--title">
            Ingrese la siguiente información:
          </h4>
            {/* { error === <p>El usuario ya se encuentra registrado</p>} */}
            <form action="" className="register__form>">
              <label>
                <p className="register__form--text">Dirección de correo es válido</p>
                <Input1
                  resultado={result}
                  cambioResultado={cambioResult}
                  estado={email}
                  cambiarEstado={cambioEmail}
                  tipo="email"
                  placeholder="Ingrese correo electrónico"
                  name="email"
                  leyendaerror="Debe ingresar un correo electrónico"
                  expresionRegular={expresiones.correo}
                />
              </label>
              <br/>
              <label>
                <p className="register__form--text">Contraseña</p>
                <p className="register__form--password">
                  La constraseña debe tener de 8 a 16 caracteres con al <br/> menos 3 de los siguientes 4 tipos: letra mayúscula, <br/> letra minúscula, número (0 a 9) y carácter espedial<br/> como @ # $ ^ & ! - _ + = [ ] { } | \ : ‘ , / ` * () ; .
                </p>
                <Input1
                  resultado={result}
                  cambioResultado={cambioResult}
                  estado={password}
                  cambiarEstado={cambioPassword}
                  tipo="password"
                  placeholder="Ingrese contraseña"
                  name="password"
                  leyendaerror="La contreseña debe contener carácteres especiales"
                  expresionRegular={expresiones.password}
                />
              </label>
              <br/>
              <label>
              <p className="register__form--text">Confimar contraseña</p>
              <Input1
                  estado={password2}
                  cambiarEstado={cambioPassword2}
                  tipo="password"
                  placeholder="Ingrese contraseña"
                  name="password2"
                  leyendaerror="La contraseña debe ser igual"
                  expresionRegular=""
                  funcion={validarPassword2()}
                  onChange={validarPassword2}
              />
              </label>
              <br/>
              <div className="register__form-buttons">
              <button className="register__form--btn" type="submit" onClick={handleSubmitClick}>REGISTRO</button>
              <button className="register__form--btn1" type="submit">CANCELAR</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default Register;