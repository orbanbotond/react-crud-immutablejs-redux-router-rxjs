import React from 'react';
import {Link} from 'react-router';

import './Sidebar.scss';

const Sidebar = ({ }) => (
  <aside className="app-sidebar">
    <h1>Items</h1>
    <ul className="list-group">
      <li className="list-group-item"><Link to="/books" className="">Books</Link></li>
      <li className="list-group-item"><Link to="/bookshelves" className="">Bookshelves</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
