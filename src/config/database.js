require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USER     || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME     || 'webfood',
  host    : process.env.DATABASE_HOST     || '0.0.0.0',
  port    : '3306',
  dialect : 'mysql'
};
