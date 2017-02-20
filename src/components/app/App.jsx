import React, { Component } from 'react';

import Todo from '../todos/AppTodo';
import Header from '../header/Header';
import Weather from '../../containers/weather/AppWeather';
import AsyncApp from '../../containers/AsyncApp';
import FeedSelect from '../../containers/FeedSelect';
import FeedBox from '../feeds/FeedBox';

import { Layout } from 'antd';
const { Content, Footer, Sider } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout className="app">
        <Header />
            <Layout>
              <Sider>
                <FeedSelect />
              </Sider>
              <Content>
                <FeedBox />
                <AsyncApp />
              </Content>
              <Sider>
                <Weather />
                <Todo />
              </Sider>
            </Layout>
          <Footer>footer</Footer>
        </Layout>
    );
  }
}
