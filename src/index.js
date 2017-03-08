import 'babel-polyfill';
 import { polyfill } from 'es6-promise'; polyfill();
// require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
