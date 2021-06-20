import React from 'react';

const Input = ({tipo, placeholder}) => {
  return(
    <>
      {/* <label htmlFor="name">Usuario</label> */}
      <input
        className="login__form--input"
        type={tipo}
        placeholder={placeholder}
      />
      {/* <p>Leyenda de Error</p> */}
    </>
  )
}

export default Input;