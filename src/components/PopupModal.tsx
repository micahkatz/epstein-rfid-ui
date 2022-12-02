import React from 'react';
import logo from './logo.svg';
import './PopupModal.scss';
import { InputContext } from '../context/inputContext';
import { ModalContext } from '../context/modalContext';

function PopupModal() {
    const inputContext = React.useContext(InputContext)
    const modalContext = React.useContext(ModalContext)
    return (
        <div className={`PopupModal`}>
            <div className={modalContext.isWarning ? 'welcome-wrapper warning' : 'welcome-wrapper'} style={{ opacity: modalContext.isShown ? 1 : 0 }}>
                <h1 className='welcome-text'>{modalContext.currMessage}</h1>
            </div>
        </div>
    );
}

export default PopupModal;
