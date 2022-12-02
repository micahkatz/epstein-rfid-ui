import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HomePage from './HomePage';
import InputContext from './context/inputContext';

function App() {
  return (
    <InputContext>
      <div className="App">
        <HomePage />
      </div>
    </InputContext>
  );
}

export default App;
