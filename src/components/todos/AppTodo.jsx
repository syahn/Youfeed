// Referenced structure of todo app and a lot of codes
// from the official Redux tutorial.
// ref: http://redux.js.org/docs/basics/

import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/todos/AddTodo';
import VisibleTodoList from '../../containers/todos/VisibleTodoList';
import { Card } from '../ui-components/General';

function AppTodo(){
  return (
    <Card>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Card>
  );
}

export default AppTodo;
