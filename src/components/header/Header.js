import React from 'react';
import Logo from '../icons/Logo';
import Title from '../icons/Title';
import ButtonPrimary from '../buttons/ButtonPrimary';
import '../../styles/global.scss';

class Header extends React.Component {
  render() {
    return(
      <>
      <div className="header">
        <div className="logo-name">
          <Logo />
          <Title/>
        </div>
        <ButtonPrimary/>
      </div>
      </>
    )
  }
}

export default Header;