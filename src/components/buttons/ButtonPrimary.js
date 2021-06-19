import React from 'react';
import '../../styles/global.scss';

const ButtonPrimary = ({value}) => {
    return(
      <>
        <button className="button-name">
          {value}
        </button>
      </>
    )
}

export default ButtonPrimary;