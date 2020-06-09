/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../App.css';
import './contact.css';
import Lottie from 'react-lottie';
import { Layout, Typography } from 'antd';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { RiStackshareLine } from 'react-icons/ri';
import { FaQuora } from 'react-icons/fa';
// import { colors } from '../../constants/themes/colors';
import contact from '../../assets/animations/contact.json';
import { LinkIcon } from '../../components/LinkIcon';

const { Content } = Layout;
const { Title } = Typography;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: contact,
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

function Contact() {
  return (
    <Content style={{ height: '100%' }} className="flex col-space-around">
      <div className="flex contact-wrapper">
        <Lottie
          options={defaultOptions}
          style={{ backgroundColor: 'transparent' }}
          height={420}
          width={420}
        />
      </div>
      <div className="text-wrapper flex text-center flex-col margin-vertical-54">
        <Title style={title}>
          Contact Me
        </Title>
        <Title style={subTitle} level={2}>deverajaycee17@gmail.com</Title>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Content>
  );
}

export { Contact };
