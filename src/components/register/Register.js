import React, {useState} from 'react';
import '../../styles/global.scss';
import Input1 from '../input/Input1';

const Register = () => {
  const [email, cambioEmail] = useState('');
  const [password, cambioPassword] = useState('');
  const [password2, cambioPassword2] = useState('');
  const [result, cambioResult] = useState(null);


  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:  /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
  }
  /* Esta es la funcion para comparar el password con el otro revisar si son iguales */
  const validarPassword2 = () => {
    if (password.length > 0){
      if(password !== password2){
        console.log('Las contraseñas no son iguales')
      } else {
        console.log('Las contraseñas son iguales')
      }
    }
  }

    return(
      <>
        <div className="register">
          <h3 className="register__title">
            Registro
          </h3>
          <div className="register__container">
          <h4 className="register__container--title">
            Ingrese la siguiente información:
          </h4>
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
                  leyendaerror="Debe ingresar un correo electrónico"
                  expresionRegular=""
                  funcion={validarPassword2()}
              />
              </label>
              <br/>
              <div className="register__form-buttons">
              <button className="register__form--btn" type="submit">REGISTRO</button>
              <button className="register__form--btn1" type="submit">CANCELAR</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default Register;