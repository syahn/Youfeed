import React, { Component } from 'react';

import Todo from '../todos/AppTodo';
import Header from '../header/Header';
import Weather from '../../containers/weather/AppWeather';
import AsyncApp from '../../containers/AsyncApp';
import FeedSelect from '../../containers/FeedSelect';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header className="header"/>
        <section className="mainContainer">
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
        </section>
      </div>
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
