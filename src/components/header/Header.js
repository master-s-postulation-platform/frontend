
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
         <Link to="/login">
           <ButtonPrimary
            value="Iniciar sesión"
           />
          </Link>
         
       </div>
       </>
  )
}

export default Header
