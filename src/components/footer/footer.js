import React from 'react';
import Logo from '../icons/Logo';
import Title from '../icons/Title';
import '../../styles/global.scss';

class Footer extends React.Component {
  render() {
    return(
      <>
      <div className="footer">
        <div className="footer-name">
          <Logo />
          <Title/>
        </div>
        <ButtonPrimary/>
      </div>
      </>
    )
  }
}

export default Footer;