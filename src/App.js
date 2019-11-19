import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there (docker-compose: working for live update?)
        </p>
        <p className="App-intro">
          I was changed on the Feature branch
        </p>
      </header>
    </div>
  );
}

export default App;
