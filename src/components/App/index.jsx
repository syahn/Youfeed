import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Layout } from 'antd';
import Header from '../Header';
import { BackTop_ } from '../General';
import { getTodo } from '../../actions/todo/TodoActionCreators';
import { getMemo } from '../../actions/memo/MemoActionCreator';
import { getPersonal } from '../../actions/personal/PersonalActionCreator';
import { editLayoutWidget, getWidget } from '../../actions/widget/WidgetActionCreator';
import { fetchPostsHN } from '../../actions/feed/HackerNewsActionCreator';
import { fetchPostsMedium } from '../../actions/feed/MediumActionCreator';
import { fetchPostsDribble } from '../../actions/feed/DribbleActionCreator';
import { fetchPostsBehance } from '../../actions/feed/BehanceActionCreator';
import { fetchPostsTechmeme } from '../../actions/feed/TechmemeActionCreator';
import { fetchPostsIfNeeded } from '../../actions/feed/RedditActionCreator';
import { fetchListsRss } from '../../actions/feed/RssListActionCreator';
import { fetchPostsRss } from '../../actions/feed/RssPostActionCreator';
import FeedControl from '../Feeds/FeedControl';
import FeedContent from '../Feeds/FeedContent';
import WidgetControl from '../Widgets/WidgetControl';

const propTypes = {
  auth: PropTypes.object,
  onGetTodo: PropTypes.func,
  onGetMemo: PropTypes.func
};

const GlobalLayout = styled(Layout)`
  background:#f8f9fa;
`;

const ContentLayout = styled.div`
  position: relative;
  top: 63px;
  display: flex;
  justify-content: center;
  width: 86vw;
  margin: 0 auto;

  @media only screen and (max-width: 1120px) {
    width: 86%;
  }
`;

const RightCol = styled.div`
  position: relative;
  display: flex;
  padding-top: 11px;
  width: 100%;
`;

class App extends Component {

  componentWillMount() {
    const {
      auth,
      onFetchPostsHN,
      onFetchPostsMedium,
      onFetchPostsBehance,
      onFetchPostsDribble,
      onFetchPostsTechmeme,
      onFetchPostsReddit,
      onFetchListsRss
    } = this.props;
    
    onFetchListsRss(auth);
    onFetchPostsReddit();
    onFetchPostsMedium();
    onFetchPostsHN();
    onFetchPostsBehance();
    onFetchPostsDribble();
    onFetchPostsTechmeme();
  }

  componentWillReceiveProps(nextProps) {
    const {
      auth,
      widgets,
      subscription,
      onGetTodo,
      onGetMemo,
      onGetWidget,
      onEditWidget,
      onGetPersonal,
      onFetchListsRss,
      onFetchPostsRss
    } = this.props;

    if (auth.status === 'AUTH_ANONYMOUS' && nextProps.auth.status === 'AUTH_LOGGED_IN') {
      onFetchListsRss(nextProps.auth);
      onGetTodo();
      onGetMemo();
      onGetWidget();
      onGetPersonal();
    }

    if (auth.status === 'AUTH_LOGGED_IN' && nextProps.auth.status === 'AUTH_ANONYMOUS') {
      window.location.reload();
      browserHistory.push('/');
    }

    if (auth.status === 'AUTH_LOGGED_IN' && widgets !== nextProps.widgets){
      onEditWidget(nextProps.widgets);
    }

    if (subscription !== nextProps.subscription) {
      for(let item of nextProps.subscription) {
        onFetchPostsRss(item.subscription.feed.url);
      }
    }
  }

  render() {
    const { auth, currentFeed, children } = this.props;
    return (
      <GlobalLayout>
        <Header />
          <ContentLayout>
            <FeedControl />
            <RightCol>
              <FeedContent
                auth={auth}
                currentFeed={currentFeed}
              >
                {children}
              </FeedContent>
              <WidgetControl />
            </RightCol>
          </ContentLayout>
        <BackTop_ visibilityHeight='900' />
      </GlobalLayout>
    );
  }
}

App.propTypes = propTypes;

export default connect(
  state => ({
    auth: state.auth,
    widgets: state.widgets,
    subscription: state.subscription,
    currentFeed: state.ui.currentFeed
  }), {
    onGetTodo: getTodo,
    onGetMemo: getMemo,
    onGetPersonal: getPersonal,
    onGetWidget: getWidget,
    onEditWidget: editLayoutWidget,
    onFetchPostsHN: fetchPostsHN,
    onFetchPostsMedium: fetchPostsMedium,
    onFetchPostsBehance: fetchPostsBehance,
    onFetchPostsDribble: fetchPostsDribble,
    onFetchPostsTechmeme: fetchPostsTechmeme,
    onFetchPostsReddit: fetchPostsIfNeeded,
    onFetchListsRss: fetchListsRss,
    onFetchPostsRss: fetchPostsRss,
})(App);
