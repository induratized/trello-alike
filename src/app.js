import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import RootReducer from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Homepage from './pages'

// const middleware = [ autoRehydrate() ];
let store = createStore(RootReducer);
// persistStore(store);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
);