const service = require('../services/auth');

const login = async (req, res) => {
  try {
    const data = await service.login(req.body);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(403).json(err);
  }
}

const create = async (req, res) => {
  try {
    const data = await service.createUser(req.body);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(409).json(err);
  }
}

module.exports = {
  login,
  create,
}