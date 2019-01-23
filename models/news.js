import db from 'utils/database';

export default class News {
  constructor(title, author, description, content) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.description = description;
  }

  static fetchAllNews() { return db.execute('SELECT * FROM news'); }
}
