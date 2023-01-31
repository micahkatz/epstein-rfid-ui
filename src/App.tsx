import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HomePage from './HomePage';
import InputContext from './context/inputContext';
import ModalContext from './context/modalContext';


function App() {
  return (
    <ModalContext>
      <InputContext>
        <HomePage />
      </InputContext>
    </ModalContext>
  );
}

export default App;
