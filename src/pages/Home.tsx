/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../App.css';
import Lottie from 'react-lottie';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { colors } from '../constants/themes/colors';
import earth from '../assets/animations/hello-earth.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: earth,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Home() {
  const [animationFinish, setAnimationDone] = useState<boolean>(false);
  const handleAnimation = () => setAnimationDone(true);

  let appLogoClass = '';
  if (animationFinish) appLogoClass = 'App-logo';
  return (
    <div className="App">
      <div className={appLogoClass}>
        <Lottie
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => handleAnimation(),
            },
          ]}
          options={defaultOptions}
          style={{ backgroundColor: 'transparent' }}
          height={400}
          width={400}
        />
      </div>
      <p style={{
        color: colors.primary, fontWeight: 800, fontFamily: 'Open Sans Bold', fontSize: 52,
      }}
      >
        Hi! I'm John Clifford de Vera
      </p>
      <a
        href="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '10%', height: '10%' }}
        // style={{ textDecoration: 'none' }}
      >
        <AiOutlineLinkedin width={400} height={400} />
      </a>
    </div>
  );
}

export { Home };
