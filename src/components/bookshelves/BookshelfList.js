import React from 'react';
import { BookshelfListItem } from './BookshelfListItem';

export const BookshelfList = ({ bookshelves, onDelete }) => {
  return (
    <div className="crud__list">
      <table className="hover">
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Url</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {bookshelves.map(bookshelf => BookshelfListItem({ bookshelf, onDelete }))}
        </tbody>
      </table>
    </div>
  )
};
