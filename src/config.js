const host = 'https://react-test-globacap.herokuapp.com/';

export default Object.freeze({
  host,
  login: 'login.json',
  endpoints: {
    books: `${host}books`,
    bookshelves: `${host}bookshelves`,
  }
});
