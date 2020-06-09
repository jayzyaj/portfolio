/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../App.css';
import './contact.css';
import Lottie from 'react-lottie';
import { Layout, Typography } from 'antd';
import { AiOutlineLinkedin } from 'react-icons/ai';
// import { colors } from '../../constants/themes/colors';
import contact from '../../assets/animations/contact.json';
import { LinkIcon } from '../../components/LinkIcon';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

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

function Contact() {
  return (
    <Content style={{ height: '100%' }} className="flex col-space-around">
      <div className="flex home-logo">
        <Lottie
          options={defaultOptions}
          style={{ backgroundColor: 'transparent' }}
          height={340}
          width={340}
        />
      </div>
      <div className="text-wrapper flex text-center flex-col margin-vertical-54">
        <Title style={title}>
          Contact Me
        </Title>
        <Title style={subTitle} level={2}>deverajaycee17@gmail.com</Title>
        <Paragraph className="caption">or</Paragraph>
        <LinkIcon
          IconProvider={AiOutlineLinkedin}
          link="https://www.linkedin.com/in/john-clifford-de-vera-511150159/"
          color="#0E76A8"
        />
      </div>
    </Content>
  );
}

export { Contact };
