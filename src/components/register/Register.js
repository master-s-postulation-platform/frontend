import React from 'react';
import '../../styles/global.scss';

class Register extends React.Component {
  render() {
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
            <form className="register__form>">
              <label>
                <p className="register__form--text">Dirección de correo es válido</p>
                <input className="register__form--input" type="email" placeholder="Ingrese correo electrónico"/>
              </label>
              <br/>
              <label>
                <p className="register__form--text">Contraseña</p>
                <p className="register__form--password">
                  La constraseña debe tener de 8 a 16 caracteres con al <br/> menos 3 de los siguientes 4 tipos: letra mayúscula, <br/> letra minúscula, número (0 a 9) y carácter espedial<br/> como @ # $ ^ & ! - _ + = [ ] { } | \ : ‘ , / ` * () ; .
                </p>
                <input className="register__form--input" type="password" placeholder="Ingrese contraseña"/>
              </label>
              <br/>
              <label>
              <p className="register__form--text">Confimar contraseña</p>
              <input className="register__form--input" type="password" placeholder="Ingrese contraseña"/>
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
}

export default Register;