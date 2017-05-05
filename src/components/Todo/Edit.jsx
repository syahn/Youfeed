import React, { Component } from "react";
import styled from "styled-components";

const EditInput = styled.input`
  width: 219px;
  border: 0;
  border-bottom: 1px solid rgba(0,0,0,.12);
  padding-bottom: 3px;
  outline: none;
`;

class Edit extends Component {
  checkEnter = e => {
    const value = e.target.value;
    if (e.key === "Enter") {
      this.props.onEdit(value);
    }
  };

  finishEdit = e => {
    const value = e.target.value;
    if (this.props.editing) {
      this.props.onEdit(value);
    }
  };

  render() {
    return (
      <EditInput
        type="text"
        spellcheck="false"
        className="todo__editInput"
        autoFocus={true}
        defaultValue={this.props.text}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }
}

export default Edit;
