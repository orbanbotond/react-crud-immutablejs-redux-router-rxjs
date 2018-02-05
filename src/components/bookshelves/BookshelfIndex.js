import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Link} from 'react-router';

import {BookshelfList} from './BookshelfList';
import * as actions from '../../store/bookshelves/actions';

class BookshelvesIndex extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.deleteBookshelf = this.deleteBookshelf.bind(this);
  }

  componentDidMount() {
    this.fetchBookshelves({});
  }

  fetchBookshelves(params) {
    this.props.actions.fetchBookshelves(params);
  }

  deleteBookshelf(bookshelf) {
    this.props.actions.deleteBookshelf(bookshelf);
  }

  render() {
    const {
      bookshelves,
    } = this.props;

    return (
      <div className="grid-container fluid crud">
        <div className="crud__actions">
          <Link to="/bookshelves/create" className="button">New Bookshelf</Link>
        </div>
        {bookshelves.length > 0 &&
        <BookshelfList bookshelves={bookshelves} onDelete={this.deleteBookshelf}/>}
      </div>
    );
  }
}

export default connect(
  (state) => {
    const jsState = state.bookshelves.toJS();

    return {
      bookshelves: jsState.bookshelves
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookshelvesIndex);
