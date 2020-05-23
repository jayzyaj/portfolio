import React from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './constants/themes/colors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: colors.primary }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: colors.tertiary }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
