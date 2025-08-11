require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_DIALECT
  },
  "test": {
    "username": process.env.POSTGRES_TEST_USER || process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_TEST_PASSWORD || process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_TEST_DB || process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_TEST_HOST || process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_TEST_DIALECT || process.env.POSTGRES_DIALECT
  },
  "production": {
    "username": process.env.POSTGRES_PROD_USER || process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PROD_PASSWORD || process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_PROD_DB || process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_PROD_HOST || process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_PROD_DIALECT || process.env.POSTGRES_DIALECT
  }
}
