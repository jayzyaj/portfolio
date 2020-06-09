/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Lottie from 'react-lottie';
import '../../App.css';
import './works.css';
import { Layout, Typography, Space } from 'antd';
// import { colors } from '../../constants/themes/colors';
import works from '../../assets/animations/works.json';
import nativeApp from '../../assets/animations/native-app.json';
import website from '../../assets/animations/website.json';

// const meImage = require('../../assets/images/me.JPG');

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const workAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: works,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const nativeAppAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: nativeApp,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const websiteAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: website,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const homeTitleStyle = {
  color: '#211F1F',
  fontWeight: 800,
  fontFamily: 'ArchivoBlack-Regular',
  // height: 12,
};

type RowProps = {
  title: string;
  caption: string;
  animation: any;
};

const WorkRow = ({ title, caption, animation }: RowProps) => (
  <div className="caption-container">
    <div className="flex row row-container">
      <div className="flex animation-width">
        <Lottie
          options={animation}
          style={{ backgroundColor: 'transparent' }}
          // width={150}
          // height={340}
          // width={340}
        />
      </div>
      <div className="flex-large col">
        <Title level={2}>
          {title}
        </Title>
        <Paragraph className="what-i-do-caption">
          {caption}
        </Paragraph>
      </div>
    </div>
    {/* <div className="flex">
      <Paragraph className="what-i-do-caption">
        {caption}
      </Paragraph>
    </div> */}
  </div>
);

function Works() {
  return (
    <Content style={{ height: '100%' }} className="flex col-space-around">
      <div className="flex no-touch">
        <Lottie
          options={workAnimationOptions}
          style={{ backgroundColor: 'transparent' }}
          height={340}
          width={340}
        />
      </div>
      <div className="flex flex-col text-wrapper">
        <Space className="flex flex-col">
          <Title style={homeTitleStyle}>
            What I do
          </Title>
          <div className="flex space-around col mt-2">
            <WorkRow title="Native Apps" animation={nativeAppAnimationOptions} caption="Let your consumers access your business or product anywhere around the globe in both iOS and Android platforms." />
            <WorkRow title="Frontend Web Apps" animation={websiteAnimationOptions} caption="Build a responsive web app of your business that delivers information efficiently in our naked eye." />
            <WorkRow title="Microservices" animation={nativeAppAnimationOptions} caption="Build your services by breaking down your business/product specification into smaller pieces and connect them together." />
          </div>
        </Space>
      </div>
    </Content>
  );
}

export { Works };
