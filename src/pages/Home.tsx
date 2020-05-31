import React, { useState } from 'react';
import '../App.css';
import Lottie from 'react-lottie';
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
      <p style={{ color: colors.primary, fontWeight: 'bolder', fontSize: 34 }}>
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
    </div>
  );
}

export { Home };
