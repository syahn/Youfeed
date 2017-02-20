import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import { Card } from '../ui/General';
import styled from 'styled-components';

//TODO: Fill it up
const propTypes = {

};
//TODO: Fill it up
const defaultProps = {

};

const CardTodo = styled(Card)`
  padding: 20px;
  max-width: 273px;
`;

function AppTodo(){
  return(
    <CardTodo>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </CardTodo>
  );
}

AppTodo.propTypes = propTypes;
AppTodo.defaultProps = defaultProps;

export default AppTodo;
