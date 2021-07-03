import React from 'react';
import '../../styles/global.scss';

import logo from '../../images/Gris.png';

const Footer = () => {
    return(
      <>
      <div className="footermain">
        <div className="footermain__name">
          <img src={logo} />
          <h1 className="footermain__title">
            Talent
          </h1>
          <h1 className="footermain__title--one">
            Jobs
          </h1>
        </div>
        <p className="footermain__political">Política de privacidad</p>
        <p className="footermain__rights">© Todos los derechos reservados 2021</p>
      </div>
      </>
    )
}

export default Footer;