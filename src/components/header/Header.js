
import Logo from '../icons/Logo';
import Title from '../icons/Title';
import ButtonPrimary from '../buttons/ButtonPrimary';
import '../../styles/global.scss';
import { useAuthDispatch, logout, useAuthState } from '../../Context'
import { Link } from 'react-router-dom';

import React from 'react'

const Header = (props) => {
  
  const dispath = useAuthDispatch();
  const userDetails = useAuthState();

  console.log(userDetails.token)

  const handleLogout = () => {
    logout(dispath);
    props.history.push('/login');
  }

  const handleLogin = () => {
    props.history.push('/login');
  }
  return (
    <>
       <div className="header">
         <div className="logo-name">
           <Link to='/'>
             <Logo />
           </Link>
           <Title/>
         </div>
         <Link to="/logim">
           <ButtonPrimary
            value={!userDetails.token ? 'Iniciar sesión' : 'Cerrar sesión'}
            action={!userDetails.token ? handleLogin : handleLogout}
           />
          </Link>
         
       </div>
       </>
  )
}

export default Header
