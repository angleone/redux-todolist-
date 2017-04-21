import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);
const el = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
el);
