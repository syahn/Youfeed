import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActionCreators';

// AddTodo is an input field with an “Add” button

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="todo_form">

      <form
        onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <button
          type="submit"
          className="todo__addbutton">
          +
        </button>

        <input
          placeholder=" Add todo"
          className="todo__input"
          ref={node => {
          input = node;
        }} />
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
