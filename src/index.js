import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './helper';

// fakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
