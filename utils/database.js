import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('news_webpage', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;

// FIrst realisation without ORM
// import mysql from 'mysql2';
//
// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Qazxdews123',
//   database: 'news_webpage',
// });
//
// export default db.promise();
