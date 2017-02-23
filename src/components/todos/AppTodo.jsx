/* eslint-disable */
import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import { Card } from '../ui/General';
import styled from 'styled-components';

const propTypes = {

};

const CardTodo = styled(Card)`
  padding: 20px;
  max-width: 273px;
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

AppTodo.propTypes = propTypes;

export default AppTodo;
