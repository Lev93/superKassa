/* eslint-disable no-underscore-dangle */
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App/App';
import reducers from './reducers';

import './index.css';

const init = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'));
};

init();
