import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';

const { Content, Header } = Layout;

const navStyle = {
  menu: {
    display: 'flex',
    // justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingBottomWidth: 0,
    borderBottomWidth: 'none !important',
  },
};

function App() {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => setCurrent(e.key);

  return (
    <Router>
      {/* <Layout style={{ backgroundColor: '#FFFAFA' }}> */}
      <Header className="siteLayoutBackground" style={{ padding: 0, backgroundColor: 'transparent' }}>
        <Menu style={navStyle.menu} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/portfolio">Intro</Link>
          </Menu.Item>
          <Menu.Item key="works">
            <Link to="/portfolio/works">Works</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/portfolio/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/portfolio/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route path="/portfolio">
            <Home />
          </Route>
        </Switch>
      </Content>
      {/* </Layout> */}
    </Router>
  );
}

export { App };
