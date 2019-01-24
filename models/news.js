import db from 'utils/database';

export default class News {
  constructor(title, author, description, content) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.description = description;
  }

  static fetchAllNews() { return db.execute('SELECT * FROM news'); }

  static getArticleById(id) {
    return db.execute('SELECT * FROM news WHERE news.id = ?', [id]);
  }

  save() {
    return db.execute(
      'INSERT INTO news (title, author, description, content) VALUES (?, ?, ?, ?)',
      [this.title, this.author, this.description, this.content],
    );
  }
}
