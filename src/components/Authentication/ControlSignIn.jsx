// import React, { Component, PropTypes } from 'react';
// import Auth from '../../components/authentication/Auth';
//
//
// import { connect } from 'react-redux'
// import { openSignIn } from '../actions/TodoActionCreators'
//
//
//
// // VisibleTodoList that subscribes to the Redux store and knows how to apply the current visibility filter.
// // VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignInClick: (id) => {
//       dispatch(open(id))
//     },
//   }
// }
//
// const ControlSignIn = connect(
//   mapDispatchToProps
// )(Auth)
//
// export default ControlSignIn;
