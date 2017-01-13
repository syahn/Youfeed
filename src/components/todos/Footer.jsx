import React from 'react'
import FilterLink from '../../containers/FilterLink'

// Footer is where we let the user change currently visible todos.

const Footer = () => (
  <p className="todo__footer">
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
