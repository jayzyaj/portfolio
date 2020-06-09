/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../App.css';
import './works.css';
import { Layout, Typography, Space } from 'antd';
// import { AiOutlineMobile } from 'react-icons/ai';
// import { colors } from '../../constants/themes/colors';

// const meImage = require('../../assets/images/me.JPG');

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const homeTitleStyle = {
  color: '#211F1F',
  fontWeight: 800,
  fontFamily: 'ArchivoBlack-Regular',
  // height: 12,
};

type RowProps = {
  title: string;
  caption: string;
};

const WorkRow = ({ title, caption }: RowProps) => (
  <div className="caption-container">
    <div className="flex row flex-row">
      {/* <AiOutlineMobile className="icon" /> */}
      <Title level={2}>
        {title}
      </Title>
    </div>
    <Paragraph className="what-i-do-caption">
      {caption}
    </Paragraph>
  </div>
);

function Works() {
  return (
    <Content style={{ height: '100%' }} className="flex col-space-around parent-container">
      <div className="flex flex-col text-wrapper mt-5">
        <Space className="flex flex-col">
          <Title style={homeTitleStyle}>
            What I do
          </Title>
          <div className="flex space-around col mt-2">
            <WorkRow title="Native Apps" caption="Let your consumers access your business or product anywhere around the globe in both iOS and Android platforms." />
            <WorkRow title="Frontend Web Apps" caption="Build a responsive web app of your business that delivers information efficiently in our naked eye." />
            <WorkRow title="Microservices" caption="Build your services by breaking down your business/product specification into smaller pieces and connect them together." />
          </div>
        </Space>
      </div>
    </Content>
  );
}

export { Works };
