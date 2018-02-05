import React, {Component} from 'react';
import * as RX from 'rxjs';
import {Provider} from 'react-redux';
import {Route, IndexRoute, Router, hashHistory, Link} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {Auth} from '../services/auth';
import store from '../store/index';
import './App.scss';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import Login from './Login';
import BookshelfIndex from './bookshelves/BookshelfIndex';
import BookshelfEdit from './bookshelves/BookshelfEdit';

const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
  render() {
    const isLoggedIn = Auth.isAuthenticated();

    return (
      <div className="app-container">
        <Header key="header" isLoggedIn={isLoggedIn} />
        <div className="app-body" key="body">
          {Auth.isAuthenticated() && [
            <Sidebar key="sidebar" />,
            <MainContent key="mainContent">
              {this.props.children}
            </MainContent>
          ]}
        </div>
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
          <IndexRoute component={() => <h1>Welcome to the crud demo</h1>}/>
          <Route path="/bookshelves" component={BookshelfIndex}/>
          <Route path="/bookshelves/create" component={BookshelfEdit}/>
          <Route path="/bookshelves/:bookshelfId" component={BookshelfEdit}/>
        </Route>
      </Router>
    </Provider>
  )
}

