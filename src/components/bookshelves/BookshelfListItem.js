import React from 'react';
import {Link} from 'react-router';

export const BookshelfListItem = ({bookshelf, onDelete}) => {
  return (
    <tr key={bookshelf.id}>
      <td>{bookshelf.id}</td>
      <td>{bookshelf.title}</td>
      <td>{bookshelf.created_at}</td>
      <td>{bookshelf.updated_at}</td>
      <td>{bookshelf.url}</td>
      <td>
        <div className="button-group">
          <Link to={`/bookshelves/${bookshelf.id}`} className="success button">Edit</Link>
          <a onClick={onDelete.bind(this, bookshelf)} className="alert button">Delete</a>
        </div>
      </td>
    </tr>
  )
};
