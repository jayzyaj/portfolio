import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/Home';

const { Content, Header } = Layout;

const navStyle = {
  nav: {
    
  },
};

function App() {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Router>
      <Layout>
        <Header className="siteLayoutBackground" style={{padding: 0, background: ""}}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
            </Menu>
          </Header>
        {/* <nav style={{ background: 'orange' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <Content>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export { App };
