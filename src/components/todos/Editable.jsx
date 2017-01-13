import React, { Component, PropTypes } from 'react'
import Edit from '../../containers/Edit'


const Editable = ({onEdit, editing, text}) => {
  if(editing) {
    return <Edit text={text} onEdit={onEdit} />;
  }
  return <span className="todo__editDefault">{text}</span>;
}


export default Editable;
