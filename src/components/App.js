import React, {Component} from 'react';
import * as RX from 'rxjs';
import {Provider} from 'react-redux';
import {Route, IndexRoute, Router, hashHistory, Link} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {Auth} from '../services/auth';
import store from '../store/index';
import './App.scss';
import Admin from './Admin';
import Login from './Login';
import BookshelfIndex from './bookshelves/BookshelfIndex';
import BookshelfEdit from './bookshelves/BookshelfEdit';

const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
  render() {
    return (
      <div className="app">
        {Auth.isAuthenticated() && this.props.children}
        {!Auth.isAuthenticated() &&
        <Link to="/login" className="button">Login</Link>
        }
      </div>
    );
  }
}


export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login}/>
        <Route path="/" component={App}>
          <IndexRoute component={Admin}/>
          <Route path="/bookshelves" component={BookshelfIndex}/>
          <Route path="/bookshelves/create" component={BookshelfEdit}/>
          <Route path="/bookshelves/:id" component={BookshelfEdit}/>
        </Route>
      </Router>
    </Provider>
  )
}

