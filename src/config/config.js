require('dotenv').config();

module.exports = {
  development: {
    // username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    // database: 'marvel_api',
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    // dialect: 'mysql',
    dialect: 'postgres',
    use_env_variable: "DATABASE_URL"
  },
  test: {
    // username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    // database: 'marvel_api',
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    // dialect: 'mysql',
    dialect: 'postgres',
    use_env_variable: "DATABASE_URL"
  },
  production: {
    // username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    // database: 'marvel_api',
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    // dialect: 'mysql',
    dialect: 'postgres',
    use_env_variable: "DATABASE_URL"
  },
};
