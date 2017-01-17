import React, { Component } from 'react';

import Todo from '../todos/AppTodo';
import Header from '../header/Header';
import Weather from '../../containers/weather/AppWeather';
import AsyncApp from '../../containers/AsyncApp';
import FeedSelect from '../../containers/FeedSelect';

import './App.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;



// <Layout>
//    <Header>Header</Header>
//    <Layout>
//      <Content>Content</Content>
//      <Sider>Sider</Sider>
//    </Layout>
//    <Footer>Footer</Footer>
//  </Layout>

// <Header className="header">
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//       </Menu>
//     </Header>

export default class App extends Component {
  render() {
    return (
      <Layout className="app">
        <Header />
        <Layout>
        <Content className="mainContainer">
          <nav className="leftCol">
            <FeedSelect />
          </nav>
          <main className="content">
            <article className="contentArea">
              <div className="card card__feed">

                <AsyncApp />
              </div>
            </article>
            <section className="rightCol">
              <Weather />
              <Todo />
            </section>
          </main>
        </Content>
        </Layout>
      <Footer>footer</Footer>
      </Layout>
    );
  }
}



// import GlobalContainer from './components/GlobalContainer.js';
// import Notes from './components/todolist/Notes';
// import Calculator from './components/calculator/Calculator';
// import bankStore from './stores/bankStore';
// import aircheapStore from './stores/aircheapStore';
// import AppCheap from './AppCheap';

// <div>
//   <button className="add-note" onClick={this.addNote}>+</button>
// </div>
// <Notes
//   notes={notes}
//   onNoteClick={this.activateNoteEdit}
//   onEdit={this.editNote}
//   onDelete={this.deleteNote}/>
//
// <Provider store={bankStore}>
//   <Calculator />
// </Provider>
