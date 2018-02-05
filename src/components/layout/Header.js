import React from 'react';
import {Link} from 'react-router';

import './Header.scss';

const Header = ({ isLoggedIn }) => (
    <header className="app-header">
        <div className="grid-x">
            <div className="medium-2 cell">
                <a className="app-header__logo">Admin</a>
            </div>
            <div className="auto cell app-header__actions">
            {!isLoggedIn && <Link to="/login" className="button hollow">Login</Link>}
            {isLoggedIn && <button href="#" className="button hollow">Logout</button>}
            </div>
        </div>
    </header>
);

export default Header;
