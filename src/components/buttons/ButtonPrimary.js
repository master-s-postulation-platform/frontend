import React from 'react';
import '../../styles/global.scss';

const ButtonPrimary = ({value,action, estado}) => {
    return(
      <>
        <button className={`button-name ${estado}`} onClick={action}>
          {value}
        </button>
      </>
    )
}

export default ButtonPrimary;