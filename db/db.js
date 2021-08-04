const UserDataBase = require('./Models/UsersDataBase');
const PostDataBase = require('./Models/PostsDataBase');

const users = new UserDataBase([
  { firstName: 'Admin', lastName: 'Admin', login: 'admin', password: 'admin', email: 'admin', gender: 'admin', id: 0 },
  { firstName: 'John', lastName: 'Doe', login: 'john', password: 'john', email: 'john@doe.com', gender: 'male', id: 1 },
  { firstName: 'Lisa', lastName: 'Su', login: 'amd', password: 'ryzen', email: 'lisa@su.com', gender: 'female', id: 2 }
]);

const posts = new PostDataBase([
  { thema: 'AMD', text: 'Ryzen 4000 is coming...', date: '2020-09-23T22:48:21.270Z', creator: 'Lisa Su', creatorId: 2, id: 2 },
  { thema: 'Anonymously', text: 'I am anonymous', date: '2020-09-22T18:15:41.270Z', creator: 'John Doe', creatorId: 1, id: 1 },
  { thema: 'Lorem', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum.', date: '2020-09-21T14:06:03.270Z', creator: 'Admin Admin', creatorId: 0, id: 0 }
]);

module.exports = {
  users,
  posts
}

