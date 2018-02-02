import Immutable from 'immutable';
import * as types from './types';

const {Map, List, fromJS} = Immutable;

const initialState = Map({
  bookshelves: {},
  params: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKSHELVES_FETCH_ONE_SUCCESS:
    case types.BOOKSHELVES_FETCH_ALL_SUCCESS:
      return state.merge({
        params: action.payload.params || {},
        bookshelves: action.payload.bookshelves || []
      });
    case types.BOOKSHELVES_CREATE_SUCCESS:
    case types.BOOKSHELVES_UPDATE_SUCCESS: {
      const index = state.bookshelves.findIndex(x => x.get('id') === action.payload.id);
      return state.bookshelves.updateIn(index, action.payload);
    }
    case types.BOOKSHELVES_DELETE_SUCCESS: {
      const index = state.bookshelves.findIndex(x => x.get('id') === action.payload.id);
      return state.bookshelves.deleteIn(index);
    }
    default:
      return state;
  }
};
