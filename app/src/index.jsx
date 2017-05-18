import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Router from './Router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(<App />, document.querySelector('#app'));
