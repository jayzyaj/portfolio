/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../../App.css';
import './home.css';
import Lottie from 'react-lottie';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa';
import { Layout, Typography } from 'antd';
// import { colors } from '../../constants/themes/colors';
import earth from '../../assets/animations/hello-earth.json';
import { IconLink } from '../../components/Icon';

const { Content } = Layout;
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
  color: '#211F1F',
  fontWeight: 800,
  fontSize: 52,
  fontFamily: 'ArchivoBlack-Regular',
};

const Footer = () => (
  <div className="footer">
    <IconLink
      IconProvider={AiOutlineLinkedin}
      link="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
      color="#0E76A8"
    />
    <IconLink
      IconProvider={AiOutlineGithub}
      link="https://www.github.com/jayzyaj/"
      color="#211F1F"
    />
    <IconLink
      IconProvider={FaQuora}
      link="https://www.quora.com/profile/Jayz-De-Vera/"
      color="#A82400"
    />
  </div>
);

function Home() {
  const [animationFinish, setAnimationDone] = useState<boolean>(false);
  const handleAnimation = () => setAnimationDone(true);

  let appLogoClass = '';
  if (animationFinish) appLogoClass = 'Home-logo';
  return (
    <Content className="flex col-space-around">
      {/* <div> */}
      <div className={`flex home-logo ${appLogoClass}`}>
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
      <div className="flex flex-center margin-vertical-34">
        <Title style={homeTitle}>
          Hi! I'm John Clifford de Vera
        </Title>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
      {/* </div> */}
    </Content>
  );
}

export { Home };
