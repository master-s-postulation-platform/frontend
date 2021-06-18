import React from 'react';
import '../../styles/global.scss';

import logo from '../../images/Gris.png';

class Footer extends React.Component {
  render() {
    return(
      <>
      <div className="footer">
        <div className="footer__name">
          <img src={logo} />
          <h1 className="footer__title">
            Talent
          </h1>
          <h1 className="footer__title--one">
            Jobs
          </h1>
        </div>
        <p className="footer__political">Política de privacidad</p>
        <p className="footer__rights">© Todos los derechos reservados 2021</p>
      </div>
      </>
    )
  }
}

export default Footer;