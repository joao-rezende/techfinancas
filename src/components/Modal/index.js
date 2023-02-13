import React from 'react';
import { XIcon } from '@primer/octicons-react'

import './style.css';

const Modal = ({ title, children, handleClose }) => {
  return (
    <>
      <span className='overlay'></span>
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-title'>
            <span>{title}</span>
            <button className='btn-link btn-close' onClick={handleClose}><XIcon /></button>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
