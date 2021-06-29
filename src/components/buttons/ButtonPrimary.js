import React from 'react';
import '../../styles/global.scss';

const ButtonPrimary = ({value,action}) => {
    return(
      <>
        <button className="button-name" onClick={action}>
          {value}
        </button>
      </>
    )
}

export default ButtonPrimary;