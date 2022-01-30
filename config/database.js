require('dotenv').config();

const { DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "username": DB_USERNAME,
  "password": DB_PASSWORD,
  "database": DB_DATABASE,
  "port":DB_PORT,
  "host": DB_HOST,
  "dialect": DB_CONNECTION
}
