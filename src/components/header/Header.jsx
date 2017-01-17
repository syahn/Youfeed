import React, { Component, PropTypes } from 'react';
import Auth from '../authentication/Auth';

import { Layout, Menu, Row, Col } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">
            <Auth />
          </Menu.Item>
      </Menu>
      </div>

    </Header>
  );
}

export default HeaderComponent;



<Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
