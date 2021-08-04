module.exports = class User {

  constructor(obj, id) {
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.login = obj.login;
    this.password = obj.password;
    this.email = obj.email;
    this.gender = obj.gender;
    this.id = id;
  }
}