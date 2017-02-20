import React, { Component } from 'react';
import Todo from '../todos/AppTodo';
import Header from '../header/Header';
import Weather from '../../containers/weather/AppWeather';
import AsyncApp from '../../containers/AsyncApp';
import FeedSelect from '../../containers/FeedSelect';
import FeedBox from '../feeds/FeedBox';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Footer } = Layout;

//TODO: Fill it up
const propTypes = {

};
//TODO: Fill it up
const defaultProps = {

};

const GlobalLayout = styled(Layout)`


`;

const ContentLayout = styled.div`
  display: flex;
  width: 1014px;
  margin: 0 auto;
`;

const RightCol = styled.div`
  display: flex;
  padding: 11px 0 0 11px;
  width: 833px;
`;

const RightSider = styled.div`
  width: 310px;
  padding: 12px;
`;

const LeftSider = styled.div`
  padding: 12px;
  width: 180px;
`;

const FeedContent = styled.div`
  width: 512px;
  padding-right: 10px;
`;

class App extends Component {
  render() {
    return (
      <GlobalLayout>
        <Header />
          <ContentLayout>
            <LeftSider>
              <FeedSelect />
            </LeftSider>
            <RightCol>
              <FeedContent>
                <FeedBox />
                <AsyncApp />
              </FeedContent>
              <RightSider>
                <Weather />
                <Todo />
              </RightSider>
            </RightCol>
          </ContentLayout>
          <Footer>footer</Footer>
        </GlobalLayout>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
