require('dotenv').config();

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

// module.exports = {
//   development: {
//     username: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'postgres',
//     use_env_variable: process.env.DATABASE_URL,
//     dialectOptions: {
//       "ssl": {
//         "require": true,
//         "rejectUnauthorized": false
//       }
//     }
//   },
//   test: {
//     username: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'postgres',
//     use_env_variable: process.env.DATABASE_URL
//   },
//   production: {
//     username: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'postgres',
//     use_env_variable: process.env.DATABASE_URL
//   },
// };

// dotenv file:
// PG_USER=zfigpyxltlqmmv
// PG_PASSWORD=278bb11c6a017c188a8d3de1cdbbf4f4274052bfc13614cf08e5c5fc1950e995
// DATABASE_URL=postgres://vjdepjiuugxmxh:c3f7052111da755724723117b0140c03dc4107d93c4f9177b16d4f3ad7289aea@ec2-52-22-161-59.compute-1.amazonaws.com:5432/d5tfk66thf5dgs
// HOSTNAME=ec2-54-224-120-186.compute-1.amazonaws.com
// DATABASE=dgvo7tudsso2s
// PORT=5432