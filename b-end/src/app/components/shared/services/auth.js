const db = require('../../../../../../db/db');


const login = (obj) => {
  return db.users.login(obj)
}

const createUser = (obj) => {
  return db.users.createUser(obj)
}



module.exports = {
  login,
  createUser
}
