import React from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './constants/themes/colors';
import Lottie from 'react-lottie';
import earth from './assets/animations/hello-earth.json';

const defaultOptions = {
  loop: false,
  autoplay: true, 
  animationData: earth,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Lottie options={defaultOptions}
          style={{ backgroundColor: 'transparent' }}
          height={400}
          width={400}
        />
        <p style={{ color: colors.primary }}>
          Hi! I'm John Clifford de Vera
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: colors.tertiary }}
        >
          Linkedin Profile
        </a>
      </header>
    </div>
  );
}

export { App };
