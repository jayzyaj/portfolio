/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../App.css';
import './about.css';
import { Layout, Typography } from 'antd';
// import { colors } from '../../constants/themes/colors';
import { colors } from '../../constants/themes/colors';

// const meImage = require('../../assets/images/me.JPG');

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const homeTitleStyle = {
  color: '#211F1F',
  fontWeight: 800,
  fontFamily: 'ArchivoBlack-Regular',
  // height: 12,
};

function About() {
  return (
    <Content className="flex col-space-around">
      <div className="flex home-logo mt-5">
        {/* <img className="image-profile" src={meImage} alt="Profile" /> */}
      </div>
      <div className="flex flex-col text-wrapper">
        <Title style={homeTitleStyle}>
          About
        </Title>
        <Paragraph className="caption">
          Hi.
          My name is John Clifford de Vera and I'm a Frontend Engineer.
          <br />
          <br />
          I work every day to create mobile native apps and client-side web apps.
          <br />
          I love working with the consumer-facing side of a product or application which inspires
          me to give the best user experience and serve data or information easily and efficiently.
          <br />
          <br />
          I love reading books. Wants to travel the world. A go-to guy on hiking.
          Doing things that makes me uncomfortable.
          <br />
          <br />
          I live in
          {' '}
          <b>Hong Kong</b>
          . Working as a
          {' '}
          <b>Frontend Developer</b>
          {' '}
          for
          <b><a style={{ color: colors.primary }} href="https://www.linkedin.com/company/circleyy/"> CircleYY</a></b>
          {/* Most of my work focuses on the
          consumer side of the product and my job is to give the user the best user experience. */}
        </Paragraph>
      </div>
      <div className="footer-wrapper">
        {/* <Footer /> */}
      </div>
    </Content>
  );
}

export { About };
