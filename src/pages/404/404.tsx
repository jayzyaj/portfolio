/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import '../../App.css';
import './404.css';
import Lottie from 'react-lottie';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { RiStackshareLine } from 'react-icons/ri';
import { FaQuora } from 'react-icons/fa';
import { Layout, Typography } from 'antd';
// import { colors } from '../../constants/themes/colors';
import notFoundAnimation from '../../assets/animations/404.json';
import { LinkIcon } from '../../components/LinkIcon';

const { Content } = Layout;
const { Title } = Typography;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFoundAnimation,
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

function NotFound() {
  return (
    <Content style={{ height: '100%' }} className="flex col-space-around">
      <div className="text-wrapper flex text-center flex-col">
        <Title style={title}>
          404
        </Title>
        <Title style={subTitle} level={2}>Page not found</Title>
      </div>
      <div className="flex home-logo">
        <Lottie
          options={defaultOptions}
          style={{ backgroundColor: 'transparent' }}
          height={520}
          width={520}
        />
      </div>
      {/* <div className="footer-wrapper">
        <Footer />
      </div> */}
    </Content>
  );
}

export { NotFound };
