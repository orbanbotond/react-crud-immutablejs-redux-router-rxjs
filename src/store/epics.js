import {combineEpics} from 'redux-observable';
import {values} from 'lodash';

import * as bookshelvesEpics from './bookshelves/epics';

export default combineEpics(
  ...values(bookshelvesEpics)
);
