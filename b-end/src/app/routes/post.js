const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/post');


module.exports = () => {

  route.post('/create', controller.create);
  route.get('/get-all-posts', controller.getAllPosts);
  route.post('/edit-post', controller.editPost);
  route.post('/remove-post', controller.removePost);
  route.delete('/remove-all-posts', controller.removeAllPosts);

  return route;
};
