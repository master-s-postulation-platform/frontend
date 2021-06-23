import React from 'react';
import '../../styles/global.scss';

/* Cree este componente con el fin de poder actualizar una sola vez el estado de los inputs */

const Input1 = ({resultado, cambioResultado, estado, cambiarEstado, tipo, placeholder, name, leyendaerror, expresionRegular, funcion}) => {
  /* Esta función escucha los cambios que se realizan en el input digitado por el usuario */
  const onChange = (e) => {
    cambiarEstado(e.target.value);
  }

  /* Esta es la funcion para validar las expresiones Regulares*/
  const validation = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado)){
        cambioResultado('true')
      } else {
        cambioResultado('false')
      }
    }
    funcion;
  }
  

  return(
    <>
      <input
        name={name}
        id={name}
        className="register__form--input"
        type={tipo}
        placeholder={placeholder}
        value={estado}
        onChange={onChange}
        onKeyUp={validation}
        onBlur={validation}
        valido={resultado}
      />
      {/*  La idea de esta linea es poder dar feedback al usuario */}
      { 
        resultado === 'true' ? '': <p className="error"> {leyendaerror} </p>
      }
    </>
  )
}

export default Input1;