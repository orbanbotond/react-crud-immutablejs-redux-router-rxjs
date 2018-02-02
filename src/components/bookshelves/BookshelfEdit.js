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
      bookshelf: {title: ''}
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

  handleChange(field, e) {
    const bookshelf = Object.assign({}, this.state.bookshelf, {[field]: e.target.value});
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
      <div className="input-group">
        <input className="input-group-field" type="txt" placeholder="Bookshelf Title"/>
        <div className="input-group-button">
          <input type="submit" className="button" value="Add Bookshelf"/>
        </div>
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
)(BookshelfEdit);
