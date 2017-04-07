// Referenced structure of todo app and a lot of codes
// from the official Redux tutorial.
// ref: http://redux.js.org/docs/basics/

import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import WidgetHeader from '../Widgets/WidgetHeader';
import { Card } from '../General';

function AppTodo() {
  return (
    <div>
      <WidgetHeader
        name="Todo"
        icon="check-circle"
      />
      <Card>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Card>
    </div>
  );
}

export default AppTodo;
