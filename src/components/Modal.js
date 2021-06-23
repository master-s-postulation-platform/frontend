import React, { Component } from 'react';
import Portal from './Portal';
import '../styles/global.scss';
export default class Modal extends Component {
  render() {

    const { children, toggle, active } = this.props;

    return (
       <Portal>
        {active && (
          <div className="modal__wrapper">
            <div className="modal__window">
              <button className="modal__btn" onClick={toggle}>
              X
              </button>
              <div>{children}</div>
            </div>
          </div>
        )}
       </Portal>
    );
  }
}