import React from 'react';
import '../../styles/global.scss';

class Title extends React.Component {
  render() {
    return(
      <div className="title">
        <h1 className="title__one">
          Talent
        </h1>
        <h1 className="title__two">
          Jobs
        </h1>
      </div>
    )
  }
}

export default Title;