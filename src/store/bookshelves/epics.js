import {keyBy} from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import {Observable} from 'rxjs/Observable';
import {push} from 'react-router-redux';

import config from '../../config';
import * as types from './types';
import * as actions from './actions';

const {endpoints: {bookshelves: endpoint}} = config;

export function fetchBookshelf(action$) {
  return action$.ofType(types.BOOKSHELVES_FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`${endpoint}/${id}.json`)
      ).map(res => actions.fetchBookshelfSuccess(res.data));
    });
}

export function fetchBookshelves(action$) {
  return action$.ofType(types.BOOKSHELVES_FETCH_ALL)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`${endpoint}.json`)
      ).map(res => actions.fetchBookshelvesSuccess(res.data, params));
    });
}

export function updateBookshelf(action$) {
  return action$.ofType(types.BOOKSHELVES_UPDATE)
    .map(action => action.payload)
    .switchMap((bookshelf) => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`${endpoint}/${bookshelf.id}.json`, bookshelf)
        ).map(res => actions.updateBookshelfSuccess(res.data)),
        Observable.of(push('/bookshelves'))
      );
    });
}

export function createBookshelf(action$) {
  return action$.ofType(types.BOOKSHELVES_CREATE)
    .map(action => action.payload)
    .switchMap(bookshelf => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`${endpoint}.json`, bookshelf)
        ).map(res => actions.createBookshelfSuccess(res.data)),
        Observable.of(push('/bookshelves'))
      );
    });
}

export function deleteBookshelf(action$) {
  return action$.ofType(types.BOOKSHELVES_DELETE)
    .map(action => action.payload)
    .switchMap((bookshelf) => {
      return Observable.fromPromise(
        axios.delete(`${endpoint}/${bookshelf.id}.json`)
      ).map(res => actions.deleteBookshelfSuccess(bookshelf));
    });
}
