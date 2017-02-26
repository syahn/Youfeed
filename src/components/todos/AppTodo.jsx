// Referenced structure of todo app and a lot of codes
// from the official Redux tutorial.
// ref: http://redux.js.org/docs/basics/

import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/todos/AddTodo';
import VisibleTodoList from '../../containers/todos/VisibleTodoList';
import { Card } from '../ui-components/General';
import styled from 'styled-components';

const CardTodo = styled(Card)`
  padding: 12px;
  max-width: 273px;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  opacity: ${props => props.isDragging ? 0.5 : 1};
`;

function AppTodo(){
  return (
    <CardTodo>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </CardTodo>
  );
}

export default AppTodo;
