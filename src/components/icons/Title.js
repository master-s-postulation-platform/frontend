import React from 'react';
import '../../styles/global.scss';

const Title = ({color, size}) => {
    return(
      <div className="title">
        <h1 className={`title__one ${color}`}>
          Talent
        </h1>
        <h1 className={`title__two ${color}`}>
          Jobs
        </h1>
      </div>
    )
}

export default Title;