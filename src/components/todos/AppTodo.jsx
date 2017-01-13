import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

// App is the root component that renders everything else.

const App = () => (
  <div className="card card__todo">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
