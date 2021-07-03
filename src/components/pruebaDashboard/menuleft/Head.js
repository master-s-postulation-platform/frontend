import React from 'react';
import Title from '../../icons/Title';
import logo from '../../../images/Gris.png';

function Head() {
  return(
    <>
      <div className="logo">
        <img
          src={logo}
          alt="Logo Talent Jobs"
        />
        <Title color='gray'/>
      </div>
    </>
  )
};

export default Head;