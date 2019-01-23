import mysql from 'mysql2';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Qazxdews123',
  database: 'news_webpage',
});

export default db.promise();
