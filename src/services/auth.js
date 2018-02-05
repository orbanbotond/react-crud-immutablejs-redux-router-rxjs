import axios from 'axios';
import querystring from 'querystring';

import config from '../config';

const mime = 'application/json';

axios.defaults.headers.post['Content-Type'] = mime;
axios.defaults.headers.put['Content-Type'] = mime;
axios.defaults.headers.patch['Content-Type'] = mime;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');

  if (['get', 'delete'].indexOf(config.method.toLowerCase()) > -1) {
    config.params = Object.assign({}, config.params, { token });
  } else {
    config.transformRequest = [(data, headers) => {
      data.token = token;

      return JSON.stringify(data);
    }];
  }

  return config;
});

export const Auth = {
  isAuthenticated() {
    return !!localStorage.getItem('auth_token');
  },
  login(form) {

    return axios.get(`${config.host}${config.login}`, {
      params: {
        user: form.user,
        password: form.password
      }
    }).then((res) => {
      const {authorization_token} = res.data;
      localStorage.setItem('auth_token', authorization_token);

      return res;
    });
  },
  dispose() {
    localStorage.removeItem('auth_token');
  }
};

function aa() {
  axios.get(`https://react-test-globacap.herokuapp.com/login.json`, {
    user: 123,
    password: 123
  }).then((res) => {
    console.log(res, 'now')
  });
}
