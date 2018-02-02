import {keyBy} from 'lodash';
import * as types from './types';

export function fetchBookshelf(payload) {
  return {type: types.BOOKSHELVES_FETCH_ONE, payload};
}

export function fetchBookshelfSuccess(payload) {
  return {type: types.BOOKSHELVES_FETCH_ONE_SUCCESS, payload};
}

export function fetchBookshelves(payload) {
  return {type: types.BOOKSHELVES_FETCH_ALL, payload};
}

export function fetchBookshelvesSuccess(bookshelves, params) {
  return {type: types.BOOKSHELVES_FETCH_ALL_SUCCESS, payload: {bookshelves, params}};
}

export function createBookshelf(payload) {
  return {type: types.BOOKSHELVES_CREATE, payload};
}

export function createBookshelfSuccess(payload) {
  return {type: types.BOOKSHELVES_CREATE_SUCCESS, payload};
}

export function updateBookshelf(payload) {
  return {type: types.BOOKSHELVES_UPDATE, payload};
}

export function updateBookshelfSuccess(payload) {
  return {type: types.BOOKSHELVES_UPDATE_SUCCESS, payload};
}

export function deleteBookshelf(payload) {
  return {type: types.BOOKSHELVES_DELETE, payload};
}

export function deleteBookshelfSuccess(payload) {
  return {type: types.BOOKSHELVES_DELETE_SUCCESS, payload};
}
