import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Works } from './pages/Works/Works';

const { Content, Header } = Layout;

const navStyle = {
  navWrapper: {
    display: 'flex',
    // justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingBottomWidth: 0,
    borderBottomWidth: 'none !important',
  },
};

// const NavBar = () => (

// );

function App() {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => setCurrent(e.key);

  return (
    <Router>
      <Header className="siteLayoutBackground" style={{ padding: 0, backgroundColor: 'transparent' }}>
        <Menu style={navStyle.navWrapper} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/portfolio">Intro</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/portfolio/about">About</Link>
          </Menu.Item>
          <Menu.Item key="works">
            <Link to="/portfolio/works">Works</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/portfolio/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ height: '100%' }}>
        <Switch>
          <Route exact path="/portfolio">
            <Home />
          </Route>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route path="/portfolio/works">
            <Works />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export { App };
