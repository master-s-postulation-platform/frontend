import React, { Component } from 'react';
import Portal from './Portal';
import '../../styles/global.scss';
import Email from '../../images/correos-electronicos.svg';
export default class Modal extends Component {
  render() {

    const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="modal__wrapper">
            <div className="modal__window">
              <div className="modal__title">
                <img src={Email} className="modal__img" alt="" />
                {children}
              </div>
              <button className="modal__btn" onClick={toggle}>
                ACEPTAR
              </button>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}