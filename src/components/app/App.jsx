import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import { getTodo } from '../../actions/todo/TodoActionCreators';
import { getMemo } from '../../actions/memo/MemoActionCreator';
import FeedControl from '../../components/layout/FeedControl';
import WidgetControl from '../../containers/widgets/WidgetControl';
import AsyncApp from '../../containers/AsyncApp';
import FeedBox from '../feeds/FeedBox';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Footer } = Layout;

const propTypes = {
  auth: PropTypes.object,
  onGetTodo: PropTypes.func,
  onGetMemo: PropTypes.func
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
  componentWillReceiveProps(nextProps) {
    const { auth, onGetTodo, onGetMemo } = this.props;
    if (auth.status == 'AUTH_ANONYMOUS' && nextProps.auth.status == 'AUTH_LOGGED_IN') {
      onGetTodo();
      onGetMemo();
    }
  }

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

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {
  onGetTodo: getTodo,
  onGetMemo: getMemo
})(App);
