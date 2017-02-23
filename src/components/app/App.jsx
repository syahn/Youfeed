import React, { Component } from 'react';
import Header from '../header/Header';
import FeedControl from '../../components/layout/FeedControl';
import WidgetControl from '../../containers/widgets/WidgetControl';
import AsyncApp from '../../containers/AsyncApp';
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

const GlobalLayout = styled(Layout)``;

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
            <FeedControl />
            <RightCol>
              <FeedContent>
                <FeedBox />
                <AsyncApp />
              </FeedContent>
              <WidgetControl />
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
