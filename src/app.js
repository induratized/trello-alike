import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
import RootReducer from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadState, saveState } from './local-storage'

import Homepage from './pages'

// const middleware = [ autoRehydrate() ];
const persistedState = loadState();
let store = createStore(
  RootReducer,
  persistedState
);
// persistStore(store);
store.subscribe(() => {
  saveState(store.getState());
})

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
);