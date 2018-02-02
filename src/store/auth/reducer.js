import Immutable from 'immutable';

const {Map, List, fromJS} = Immutable;

const initialState = Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state.merge({
        redirectTo: '/',
        token: action.data.token,
        currentUser: action.data.user
      });
    case 'LOGOUT':
      return state.merge({
        redirectTo: '/',
        token: null,
        currentUser: undefined
      });
  }

  return state;
};
