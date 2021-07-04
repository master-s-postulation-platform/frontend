import React from 'react';
import Lupa from '../icons/Lupa';
import Bombilla from '../icons/Bombilla';
import House from '../icons/House';
import '../../styles/global.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="landing">
        <p className="landing__title">
          Para postularte en Talent Jobs <br />
          debe tener en cuenta los <br />
          siguientes pasos.
        </p>
        <div className="landing__container">
          <button className="landing__btn">
            <Lupa />
            <p>Crea una cuenta</p>
          </button>
          <button className="landing__btn1">
            <Bombilla />
            <p>Llena tú perfil</p>
          </button>
          <button className="landing__btn2">
            <House />
            <p>Enviar <br />postulación</p>
          </button>
        </div>
        <Link to='/register'>
          <button className="landing__submit">
            INICIAR POSTULACIÓN
          </button>
        </Link>
      </div>
    </>
  )
}

export default Landing
