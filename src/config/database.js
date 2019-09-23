require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USER     || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE          || 'webfood',
  host    : process.env.DATABASE_HOST     || '127.0.0.1',
  dialect : 'mysql'
};
