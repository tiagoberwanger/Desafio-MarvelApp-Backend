require('dotenv').config();

//teste local
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};

teste no Heroku
module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
};