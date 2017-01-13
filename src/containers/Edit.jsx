import React, { Component, PropTypes } from 'react'
import { editTodo } from '../actions/TodoActionCreators'
import { connect } from 'react-redux'

  class Edit extends Component {

    render() {
      const {text, onEdit} = this.props;

      return <input
        type="text"
        className="todo__editInput"
        autoFocus={true}
        defaultValue={text}
        onBlur={onEdit}
        onKeyPress={this.checkEnter}
         />;
    }
    checkEnter = (e) => {
      const value = e.target.value;
      if(e.key === 'Enter') {
        this.props.onEdit(value);
      }
    }
  }


export default Edit
