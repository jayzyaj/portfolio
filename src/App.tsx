import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { colors } from './constants/themes/colors';
// import { colors } from './constants/themes/colors';

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
            <Link to="/">Intro</Link>
          </Menu.Item>
          <Menu.Item key="works">
            <Link to="/works">Works</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
      {/* </Layout> */}
    </Router>
  );
}

export { App };
