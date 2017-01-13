import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <a target="_blank" href={post.url}>{post.title}</a>

            <span> &#8682; {post.ups}</span>
          </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}



// import React, { PropTypes, Component } from 'react'
//
// export default class Posts extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.posts.map((post, i) =>
//           <li key={i}>{post.title}</li>
//         )}
//       </ul>
//     )
//   }
// }
//
// Posts.propTypes = {
//   posts: PropTypes.array.isRequired
// }
