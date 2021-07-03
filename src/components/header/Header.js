
import Logo from '../icons/Logo';
import Title from '../icons/Title';
import ButtonPrimary from '../buttons/ButtonPrimary';
import '../../styles/global.scss';
import { Link, useLocation, NavLink } from 'react-router-dom';

import React from 'react'

const Header = (props) => {
  const ubicacion = useLocation();

  return (
    <>
      <div className={ubicacion.pathname === "/login" ? 'header__login' : 'header__main ' }>
        <div className={ubicacion.pathname === "/login" ? 'logo-login' : 'logo-name ' }>
          <Link to='/'>
            <Logo />
          </Link>
          <Title/>
        </div>
        {
          ubicacion.pathname === "/login" ? ' ' :
          <>
            <NavLink to='/login'>
              <ButtonPrimary
                value='Iniciar sesión'
              />
            </NavLink>
          </>
        }
      </div>
    </>
  )
}

export default Header
