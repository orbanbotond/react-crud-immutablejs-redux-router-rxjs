import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import auth from './auth/reducer';
// import books from './books/reducer';
import bookshelves from './bookshelves/reducer';

export default combineReducers({
  auth,
  // books,
  bookshelves,
  routing: routerReducer,
});
