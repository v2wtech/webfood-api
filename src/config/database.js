require('dotenv').config();

module.exports = {
  username: process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME     || 'webfoodapi',
  host    : process.env.DB_HOST     || '0.0.0.0',
  port    : '3306',
  dialect : 'mysql'
};
