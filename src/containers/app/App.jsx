/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import { getTodo } from '../../actions/todo/TodoActionCreators';
import { getMemo } from '../../actions/memo/MemoActionCreator';
import { editLayoutWidget, getWidget } from '../../actions/widget/WidgetActionCreator';
import { fetchPostsHN } from '../../actions/feed/HackerNewsActionCreator';
import { fetchPostsMedium } from '../../actions/feed/MediumActionCreator';
import { fetchPostsDribble } from '../../actions/feed/DribbleActionCreator';
import { fetchPostsBehance } from '../../actions/feed/BehanceActionCreator';
import { fetchPostsTechmeme } from '../../actions/feed/TechmemeActionCreator';
import { fetchListsRss } from '../../actions/feed/RssListActionCreator';
import FeedControl from '../../components/feeds/FeedControl';
import FeedContent from '../../components/feeds/FeedContent';
import WidgetControl from '../../containers/widgets/WidgetControl';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Footer } = Layout;

const propTypes = {
  auth: PropTypes.object,
  onGetTodo: PropTypes.func,
  onGetMemo: PropTypes.func
};

const GlobalLayout = styled(Layout)`
  background:#f8f9fa;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 1126px;
  margin: 0 auto;
`;

const RightCol = styled.div`
  display: flex;
  padding: 11px 0 0 11px;
  width: 833px;
`;


class App extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      auth,
      widgets,
      onGetTodo,
      onGetMemo,
      onGetWidget,
      onEditWidget,
      onFetchPostsHN,
      onFetchPostsMedium,
      onFetchPostsBehance,
      onFetchPostsDribble,
      onFetchPostsTechmeme,
      onFetchListsRss
    } = this.props;

    if (auth.status == 'AUTH_ANONYMOUS' && nextProps.auth.status == 'AUTH_LOGGED_IN') {
      onFetchListsRss(nextProps.auth);
      onGetTodo();
      onGetMemo();
      onGetWidget();
      onFetchPostsHN();
      onFetchPostsMedium();
      onFetchPostsBehance();
      onFetchPostsDribble();
      onFetchPostsTechmeme();
    }
    if (auth.status == 'AUTH_LOGGED_IN' && widgets !== nextProps.widgets){
      onEditWidget(nextProps.widgets);
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
                {this.props.children}
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

export default connect(
  state => ({
    auth: state.auth,
    widgets: state.widgets,
  }), {
  onFetchListsRss: fetchListsRss,
  onGetTodo: getTodo,
  onGetMemo: getMemo,
  onGetWidget: getWidget,
  onEditWidget: editLayoutWidget,
  onFetchPostsHN: fetchPostsHN,
  onFetchPostsMedium: fetchPostsMedium,
  onFetchPostsBehance: fetchPostsBehance,
  onFetchPostsDribble: fetchPostsDribble,
  onFetchPostsTechmeme: fetchPostsTechmeme
})(App);
