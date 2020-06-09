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
import { Contact } from './pages/Contact/Contact';

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
    <Router basename="/portfolio">
      <Header className="siteLayoutBackground" style={{ padding: 0, backgroundColor: 'transparent' }}>
        <Menu style={navStyle.navWrapper} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Intro</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="works">
            <Link to="/works">What I do</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ height: '100%' }}>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={About} path="/about" />
          <Route component={Works} path="/works" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </Content>
    </Router>
  );
}

export { App };
