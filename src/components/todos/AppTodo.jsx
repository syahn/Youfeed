// Referenced structure of todo app and a lot of codes
// from the official Redux tutorial.
// ref: http://redux.js.org/docs/basics/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import AddTodo from '../../containers/todos/AddTodo';
import VisibleTodoList from '../../containers/todos/VisibleTodoList';
import { getTodo } from '../../actions/todo/TodoActionCreators';
import { getMemo } from '../../actions/memo/MemoActionCreator';
import { Card } from '../ui-components/General';

class AppTodo extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth, onGetTodo, onGetMemo } = this.props;
    if (auth.status == 'AUTH_ANONYMOUS' && nextProps.auth.status == 'AUTH_LOGGED_IN') {
      onGetTodo();
      onGetMemo();
    }
  }

  render(){
    return (
      <Card>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Card>
    );
  }
}


const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {
  onGetTodo: getTodo,
  onGetMemo: getMemo
})(AppTodo);
