const service = require('../services/post');

const create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    return res.status(201).json(data)
  } catch (err) {
    return res.status(409).json(err);
  }
}

const getAllPosts = async (req, res) => {
  try {
    const data = await service.getAllPosts();
    return res.status(200).json(data)
  } catch (err) {
    return res.status(404).json(err);
  }
}

const editPost = async (req, res) => {
  try {
    const data = await service.editPost(req.body);
    return res.status(200).json(data)
  } catch (err) {
    return res.status(409).json('Invalid data')
  }
}

const removePost = async (req, res) => {
  try {
    const data = await service.removePost(req.body);
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500)
  }
}

const removeAllPosts = async (req, res) => {
  try {
    const data = await service.removeAllPosts();
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
  create,
  getAllPosts,
  editPost,
  removePost,
  removeAllPosts
}