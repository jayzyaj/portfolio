import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './pages/Home';
// import { colors } from './constants/themes/colors';

const { Content, Header } = Layout;

const navStyle = {
  menu: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function App() {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => setCurrent(e.key);

  return (
    <Router>
      <Layout>
        <Header className="siteLayoutBackground" style={{ padding: 0 }}>
          <Menu style={navStyle.menu} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            {/* <Menu.Item style={{ borderBottomColor: colors.primary }} key="home">
                <Link style={{ color: colors.primary }} to="/">Home</Link> */}
            <Menu.Item key="home">
              <Link to="/">Home</Link>
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
      </Layout>
    </Router>
  );
}

export { App };
