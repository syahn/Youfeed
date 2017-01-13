import React, { PropTypes } from 'react'

const Selected = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>
  </span>
)

Selected.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Selected
//
//
// import React, { Component, PropTypes } from 'react'
//
// export default class Picker extends Component {
//   render() {
//     const { value, onChange, options } = this.props
//
//     return (
//       <span>
//         <h1>{value}</h1>
//         <select onChange={e => onChange(e.target.value)}
//                 value={value}>
//           {options.map(option =>
//             <option value={option} key={option}>
//               {option}
//             </option>)
//           }
//         </select>
//       </span>
//     )
//   }
// }
//
// Picker.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.string.isRequired
//   ).isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// }
