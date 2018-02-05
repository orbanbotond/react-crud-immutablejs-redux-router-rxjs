import Immutable from 'immutable';
import * as types from './types';

const {Map, List, fromJS} = Immutable;

const initialState = Map({
  bookshelf: {},
  bookshelves: {},
  params: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKSHELVES_FETCH_ONE_SUCCESS:
      return state.merge({
        bookshelf: action.payload || []
      });
    case types.BOOKSHELVES_FETCH_ALL_SUCCESS:
      return state.merge({
        params: action.payload.params || {},
        bookshelves: action.payload.bookshelves || []
      });
    case types.BOOKSHELVES_CREATE_SUCCESS:
    case types.BOOKSHELVES_UPDATE_SUCCESS: {
      const bookshelves = state.get('bookshelves');
      const index = bookshelves.findIndex(x => x.get('id') === action.payload.id);
      const newBookshelves = index > -1 ? bookshelves.updateIn(index, action.payload) : bookshelves.push(action.payload);
      return state.setIn('bookshelves', newBookshelves);
    }
    case types.BOOKSHELVES_DELETE_SUCCESS: {
      const bookshelves = state.get('bookshelves');
      const index = bookshelves.findIndex(x => x.get('id') === action.payload.id);
      const newBookshelves = bookshelves.deleteIn(index);
      return state.setIn('bookshelves', newBookshelves);
    }
    default:
      return state;
  }
};
