import axios from 'axios';
import querystring from 'querystring';

import config from '../config';

axios.interceptors.request.use((config) => {

  if (config.method.toLowerCase() === 'get') {
    const params = querystring.parse(config.url);
    params.token = localStorage.getItem('auth_token');
    config.url += '?' + querystring.stringify(params);
  } else {
    config.transformRequest = [(data, headers) => {

      data.token = localStorage.getItem('auth_token');

      return data;
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
