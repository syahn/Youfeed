// Referenced structure of todo app and a lot of codes
// from the official Redux tutorial.
// ref: http://redux.js.org/docs/basics/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import AddTodo from '../../containers/todos/AddTodo';
import VisibleTodoList from '../../containers/todos/VisibleTodoList';
import { getTodo } from '../../actions/todo/TodoActionCreators';
import { Card } from '../ui-components/General';

class AppTodo extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth, onGetTodo } = this.props;
    console.log( 'auth: ', auth, nextProps.auth);
    if (auth.status == 'AUTH_ANONYMOUS' && nextProps.auth.status == 'AUTH_LOGGED_IN') {
      onGetTodo();
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
const mapDispatchToProps = dispatch => ({ onGetTodo: () => dispatch(getTodo()) });

export default connect(mapStateToProps, mapDispatchToProps)(AppTodo);
