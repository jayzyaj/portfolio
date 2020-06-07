/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../../App.css';
import Lottie from 'react-lottie';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
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

const homeTitle = {
  color: '#211F1F',
  fontWeight: 800,
  fontSize: 52,
  fontFamily: 'ArchivoBlack-Regular',
  // height: 12,
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
      IconProvider={FaQuora}
      link="https://www.quora.com/profile/Jayz-De-Vera/"
      color="#A82400"
    />
  </div>
);

function About() {
  return (
    <Content className="flex col-space-around">
      <div className="flex home-logo">
      </div>
      <div className="flex text-center flex-col margin-vertical-54">
        <Title style={homeTitle}>
          I'm John Clifford de Vera
        </Title>
        <Title level={2}>Software Engineer</Title>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Content>
  );
}

export { About };
