import React, { Component } from 'react';

  class Edit extends Component {
    checkEnter = (e) => {
      const value = e.target.value;
      if(e.key === 'Enter') {
        this.props.onEdit(value);
      }
    }

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

  }


export default Edit;
