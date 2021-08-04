module.exports = class Post {

  constructor(obj, id, date) {
    this.thema = obj.thema;
    this.text = obj.text;
    this.date = date;
    this.creator = obj.creator;
    this.creatorId = obj.creatorId;
    this.id = id;
  }
}