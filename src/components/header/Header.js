import React from 'react';
import Logo from '../icons/Logo';
import Title from '../icons/Title';
import ButtonPrimary from '../buttons/ButtonPrimary';
import '../../styles/global.scss';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <>
      <div className="header">
        <div className="logo-name">
          <Link to='/'>
            <Logo />
          </Link>
          <Title/>
        </div>
        <Link to='/login'>
          <ButtonPrimary/>
        </Link>
      </div>
      </>
    )
  }
}

export default Header;