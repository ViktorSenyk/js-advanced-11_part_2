const Post = require('./Post');

module.exports = class PostDataBase {
  constructor(arr) {
    this.posts = arr;
  }

  create(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object') {
        return reject()
      }
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && (obj[prop] === undefined || obj[prop] === '')) {
          return reject()
        }
      }
      const newPost = new Post(obj, this.posts.length, new Date())
      this.posts.unshift(newPost);
      resolve(newPost)
    })
  }

  getAllPosts() {
    return new Promise((resolve, reject) => {
      if (this.posts.length === 0) {
        return reject('404 Not found')
      }
      return resolve(this.posts)
    })
  }

  editPost(obj) {
    return new Promise((resolve, reject) => {
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && (obj[prop] === undefined || obj[prop] === '')) {
          return reject()
        }
      }
      this.posts.forEach((el, i) => {
        if (el.id === obj.id) {
          this.posts[i] = obj;
          return resolve(this.posts[i])
        }
      })
    })
  }

  removePost(obj) {
    return new Promise((resolve) => {
      this.posts = this.posts.filter((el) => {
        return el.id !== obj.id
      })
      return resolve(true)
    })
  }

  removeAllPosts() {
    return new Promise((resolve) => {
      this.posts.length = 0;
      return resolve(true)
    })
  }

}