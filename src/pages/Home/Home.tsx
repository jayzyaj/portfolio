/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../../App.css';
import './home.css';
import Lottie from 'react-lottie';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { RiStackshareLine } from 'react-icons/ri';
import { FaQuora } from 'react-icons/fa';
import { Layout, Typography } from 'antd';
// import { colors } from '../../constants/themes/colors';
import earth from '../../assets/animations/hello-earth.json';
import { LinkIcon } from '../../components/LinkIcon';

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

const title = {
  color: '#211F1F',
  fontWeight: 800,
  fontSize: 52,
  fontFamily: 'ArchivoBlack-Regular',
  // height: 12,
};

const subTitle = {
  fontFamily: 'OpenSans-Regular',
  marginTop: -20,
};

const Footer = () => (
  <div className="footer">
    <LinkIcon
      IconProvider={AiOutlineLinkedin}
      link="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
      color="#0E76A8"
    />
    <LinkIcon
      IconProvider={AiOutlineGithub}
      link="https://www.github.com/jayzyaj/"
      color="#211F1F"
    />
    <LinkIcon
      IconProvider={RiStackshareLine}
      link="https://stackshare.io/jayzyaj/tech-stack"
      color="#0690FA"
    />
    <LinkIcon
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
    <Content style={{ height: '100%' }} className="flex col-space-around">
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
          height={340}
          width={340}
        />
      </div>
      <div className="text-wrapper flex text-center flex-col margin-vertical-54">
        <Title style={title}>
          I'm John Clifford de Vera
        </Title>
        <Title style={subTitle} level={2}>Software Engineer</Title>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Content>
  );
}

export { Home };
