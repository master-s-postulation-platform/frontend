import React from 'react';
import './headerDashboard.scss';
import iconUser from '../../pages/Dashboard/images/Icono-Usuario.svg';

function HeaderDashboard({user}) {

  return(
    <>
    <div className="contentHeader">

      <header className="headerUser">
      <div></div>
            <nav className="menuCSS3">
              <ul className="list">
                <li>
                  <a className="link" href="#">
                    <img src={iconUser} alt="Icono Usuario" />
                  </a>
                  <ul>
                    <li>
                      <a className="link" href="#">Perfil</a>
                    </li>
                    <li>
                      <a  className="link" href="#">Cerrar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
      </header>
        <div className="saludo">
          <div className="saludo__bienvenida">
            <h1>Bienvenido username</h1>
            <h1>¿Cómo estás hoy?</h1>
          </div>
        </div>
    </div>
    </>
  )
}

export default HeaderDashboard;