const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/auth');


module.exports = () => {

  route.post('/login', controller.login);
  route.post('/register', controller.create);

  return route;
};