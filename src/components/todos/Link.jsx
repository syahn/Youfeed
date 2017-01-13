import React, { PropTypes } from 'react'

// Link is a link with a callback.
//
// onClick() is a callback to invoke when link is clicked.

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         //The idea of this is to tell the DOM to stop bubbling
         //events. In short, we'll avoid triggering possible other events elsewh
         //ere in the structure if we delete a note.
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
