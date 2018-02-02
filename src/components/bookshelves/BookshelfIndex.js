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
      params,
      bookshelves,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-right">
            <Link to="/bookshelves/create" className="btn btn-primary">New Bookshelf</Link>
          </div>
        </div>
        {bookshelves.length > 0 &&
        <BookshelfList bookshelves={bookshelves} onDelete={this.deleteBookshelf}/>}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    params: state.bookshelves.get('params'),
    bookshelves: Object.values(state.bookshelves.get()),
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookshelvesIndex);
