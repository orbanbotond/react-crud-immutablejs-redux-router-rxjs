import {isEqual} from 'lodash';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from "../../store/bookshelves/actions";

class BookshelfEdit extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      bookshelfId: this.props.params.bookshelfId,
      bookshelf: this.props.bookshelf || {title: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.bookshelf, this.state.bookshelf)) {
      this.setState({...this.state, bookshelf: nextProps.bookshelf});
    }
  }

  componentDidMount() {
    if (this.state.bookshelfId) {
      this.props.actions.fetchBookshelf(this.props.params.bookshelfId);
    }
  }

  handleChange(e) {
    const bookshelf = Object.assign({}, this.state.bookshelf, {title: e.target.value});
    this.setState(Object.assign({}, this.state, {bookshelf}));
  }

  handleSubmit() {
    if (this.state.bookshelfId) {
      this.props.actions.updateBookshelf(this.state.bookshelf);
    } else {
      this.props.actions.createBookshelf(this.state.bookshelf);
    }
  }

  render() {
    return (
      <form className="crud__edit-form" onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="input-group">
          <input className="input-group-field" type="text" placeholder="Bookshelf Title" value={this.state.bookshelf.title || ''} onChange={this.handleChange.bind(this)} />
          <div className="input-group-button">
            <input type="submit" className="button" value={this.state.bookshelfId ? 'Update Bookshelf' : 'Create Bookshelf' }/>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  (state) => {
    const jsState = state.bookshelves.toJS();

    return {
      bookshelf: jsState.bookshelf
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookshelfEdit);
