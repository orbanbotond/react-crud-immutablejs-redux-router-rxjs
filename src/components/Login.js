import React from 'react';
import PropTypes from 'prop-types';

import {Auth} from '../services/auth';
import './Login.scss';

export default class Login extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: '',
      password: ''
    };
  }

  handleChange(field, e) {
    this.setState(Object.assign({}, this.state, {[field]: e.target.value}))
  }

  handleSubmit() {
    Auth.login(this.state)
      .then(() => this.redirect());
  }

  redirect() {
    this.context.router.push('/bookshelves');
  }

  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit.bind(this)} noValidate>
          <h4 className="text-center">Log in</h4>
          <label>User
            <input type="text" placeholder="User"
                  value={this.state.user}
                  onChange={this.handleChange.bind(this, 'user')}
            />
          </label>
          <label>Password
            <input type="password" placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this, 'password')}
            />
          </label>
          <p><input type="submit" className="button expanded" value="Log in"/></p>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object
};
