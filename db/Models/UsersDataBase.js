const User = require('./User');

module.exports = class UsersDataBase {
  constructor(arr) {
    this.users = arr;
  }

  login(obj) {
    return new Promise((resolve, reject) => {
      const user = this.users.find(el => el.login === obj.login.toLowerCase());
      if (user) {
        if (user.password === obj.password) {
          resolve(user)
        } else {
          reject('Password is wrong. Please check the password.');
        }
      } else {
        reject('This account was not found.');
      }
    })
  }

  createUser(obj) {
    return new Promise((resolve, reject) => {
      obj.login = obj.login.toLowerCase();
      const userLogin = this.users.find(el => el.login === obj.login);
      if (userLogin) {
        reject('User with this login already exists!')
      } else {
        this.users.push(new User(obj, this.users.length));
        resolve(true)
      }
    })
  }



}