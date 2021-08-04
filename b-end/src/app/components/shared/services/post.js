const db = require('../../../../../../db/db');


const create = (obj) => {
  return db.posts.create(obj)
}

const getAllPosts = () => {
  return db.posts.getAllPosts();
}

const editPost = (obj) => {
  return db.posts.editPost(obj);
}

const removePost = (obj) => {
  return db.posts.removePost(obj)
}

const removeAllPosts = () => {
  return db.posts.removeAllPosts()
}


module.exports = {
  create,
  getAllPosts,
  editPost,
  removePost,
  removeAllPosts
}
