import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Root from './../../containers/Root'


// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/(:filter)" component={App} />
//     </Router>
//   </Provider>
// );


class App extends Component {
  render() {
    return (

        <Root />

    )
  }
}


export default App;
