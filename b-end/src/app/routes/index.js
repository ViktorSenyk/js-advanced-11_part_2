const Router = require('express').Router;

const auth = require('./auth');
const post = require('./post');

module.exports = () => {
  const routing = Router();

  routing.use('/auth', auth());
  routing.use('/post', post());

  return routing;
}