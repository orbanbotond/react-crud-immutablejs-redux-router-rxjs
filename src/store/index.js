import {hashHistory} from 'react-router';
import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';

import reducers from './reducers';
import epics from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      createEpicMiddleware(epics),
      routerMiddleware(hashHistory),
      thunk,
    )
  )
);
