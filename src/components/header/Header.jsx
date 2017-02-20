import React from 'react';
import AuthContainer from '../authentication/AuthContainer';

import { Menu, Layout } from 'antd';
const { Header } = Layout;

const HeaderComponent = () => {
  return(
    <Header className="Header">
      <div className="Logo">
        Youfeed
      </div>
      <div className="Menus">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">Support</Menu.Item>
          <Menu.Item key="3">
            <AuthContainer />
          </Menu.Item>
      </Menu>
      </div>

    </Header>
  );
};

export default HeaderComponent;
