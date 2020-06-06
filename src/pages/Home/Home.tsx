/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../../App.css';
import Lottie from 'react-lottie';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Typography } from 'antd';
import { colors } from '../../constants/themes/colors';
import earth from '../../assets/animations/hello-earth.json';

const { Title } = Typography;

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: earth,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const homeTitle = {
  color: colors.primary,
  fontWeight: 800,
  fontSize: 52,
  fontFamily: 'ArchivoBlack-Regular',
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
      <Title style={homeTitle}>
        Hi! I'm John Clifford de Vera
      </Title>
      <a
        href="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        // style={{ textDecoration: 'none' }}
      >
        <AiOutlineLinkedin style={{ fontSize: 40 }} />
      </a>
    </div>
  );
}

export { Home };
