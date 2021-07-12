import React from 'react';
import './headerDashboard.scss';
import iconUser from '../../pages/Dashboard/images/Icono-Usuario.svg';
import { logout, useAuthDispatch, useAuthState } from '../../Context';
import { useHistory } from 'react-router-dom';
import pdf from '../../images/Group652.png';
import excel from '../../images/Group653.png';


function HeaderDashboard({user}) {
  
  const userDetails = useAuthState();

  let title = userDetails.admin;
  
  const history = useHistory()

  const dispatch = useAuthDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      logout(dispatch);
      history.push('/login');
    } catch (error) {
      console.log(error)
    }
  }

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
                      <a  className="link" onClick={handleLogout}>Cerrar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
      </header>
        <div className="saludo">
          <div className="saludo__bienvenida">
            <div>
              <h1>Bienvenido {title === true ? 'Administrador' : 'Username' }</h1>
              <h1>¿Cómo estás hoy?</h1>
            </div>
            {
              title === true ?
              <div>
                <img src={pdf} alt="" />
                <img src={excel} alt="" />
              </div>
                :
                ''
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default HeaderDashboard;