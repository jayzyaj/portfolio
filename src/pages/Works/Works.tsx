import React from 'react';
import Lottie from 'react-lottie';
import '../../App.css';
import './works.css';
import { Layout, Typography } from 'antd';
import works from '../../assets/animations/works.json';
import nativeApp from '../../assets/animations/native-app.json';
import website from '../../assets/animations/website.json';
import microservices from '../../assets/animations/microservices.json';

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
  loop: false,
  autoplay: true,
  animationData: website,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const microservicesAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: microservices,
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
  <div className="row-container mv-16">
    <div className="flex animation-width">
      <Lottie
        options={animation}
        style={{ backgroundColor: 'transparent' }}
        width={100}
        height={100}
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
        <Title style={homeTitleStyle}>
          What I do
        </Title>
        <WorkRow title="Native Apps" animation={nativeAppAnimationOptions} caption="Let your consumers access your business or product anywhere around the globe in both iOS and Android platforms." />
        <WorkRow title="Frontend Web Apps" animation={websiteAnimationOptions} caption="Build a responsive web app of your business that delivers information efficiently in our naked eye." />
        <WorkRow title="Microservices" animation={microservicesAnimationOptions} caption="Build your services by breaking down your business/product specification into smaller pieces and connect them together." />
      </div>
    </Content>
  );
}

export { Works };
