import React, { useState } from 'react';
import '../../styles/global.scss';
import Input1 from '../input/Input1';
import Modal from '../modals/Modal';
import { useHistory } from 'react-router-dom';
import { loginRegister, useAuthState, useAuthDispatch } from '../../Context';

const Register = () => {
  
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

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
    password: /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
  }

  /* Esta es la funcion para comparar el password con el otro revisar si son iguales */
  const validarPassword2 = () => {
    if (password.length > 0) {
      if (password !== password2) {
        return false
      } else {
        return true
      }
    }
  }

  const sendRegister = () => {

    let requestRegister = {
      "email": email,
      "password": password,
      "re_password": password2
    }

    fetch('https://api.hardmakers.com/api/v1/users/', {
      method: 'POST',
      body: JSON.stringify(requestRegister),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.error === false) {

          loginRegister(dispatch, data)
          history.push('/dashboard');

        } else {
          setActive(true)
        }
      })


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

  return (
    <>
      <Modal active={active} toggle={toggle}>
        Este correo ya se encuentra registrado
      </Modal>
      <div className="register">
        <h3 className="register__title">
          Registro
        </h3>
        <div className="register__container">
          <h4 className="register__container--title">
            Ingrese la siguiente informaci??n:
          </h4>
          {/* { error === <p>El usuario ya se encuentra registrado</p>} */}
          <form action="" className="register__form>">
            <label>
              <p className="register__form--text">Direcci??n de correo es v??lido</p>
              <Input1
                resultado={result}
                cambioResultado={cambioResult}
                estado={email}
                cambiarEstado={cambioEmail}
                tipo="email"
                placeholder="Ingrese correo electr??nico"
                name="email"
                leyendaerror="Debe ingresar un correo electr??nico"
                expresionRegular={expresiones.correo}
              />
            </label>
            <br />
            <label>
              <p className="register__form--text">Contrase??a</p>
              <p className="register__form--password">
                La constrase??a debe tener de 8 a 16 caracteres con al <br /> menos 3 de los siguientes 4 tipos: letra may??scula, <br /> letra min??scula, n??mero (0 a 9) y car??cter espedial<br /> como @ # $ ^ & ! - _ + = [ ] { } | \ : ??? , / ` * () ; .
              </p>
              <Input1
                resultado={result}
                cambioResultado={cambioResult}
                estado={password}
                cambiarEstado={cambioPassword}
                tipo="password"
                placeholder="Ingrese contrase??a"
                name="password"
                leyendaerror="La contrese??a debe contener car??cteres especiales"
                expresionRegular={expresiones.password}
              />
            </label>
            <br />
            <label>
              <p className="register__form--text">Confimar contrase??a</p>
              <Input1
                estado={password2}
                cambiarEstado={cambioPassword2}
                tipo="password"
                placeholder="Ingrese contrase??a"
                name="password2"
                leyendaerror="La contrase??a debe ser igual"
                expresionRegular=""
                funcion={validarPassword2()}
                onChange={validarPassword2}
              />
            </label>
            <br />
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