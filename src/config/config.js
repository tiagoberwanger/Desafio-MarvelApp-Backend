require('dotenv').config();

// module.exports = {
//   development: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',her
//   },
//   test: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',
//   },
//   production: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',
//   },
// };

module.exports = {
  development: {
    username: 'zfigpyxltlqmmv',
    password: '278bb11c6a017c188a8d3de1cdbbf4f4274052bfc13614cf08e5c5fc1950e995',
    database: 'dgvo7tudsso2s',
    host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    dialect: 'postgres',
    use_env_variable: DATABASE_URL,
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  test: {
    username: 'zfigpyxltlqmmv',
    password: '278bb11c6a017c188a8d3de1cdbbf4f4274052bfc13614cf08e5c5fc1950e995',
    database: 'dgvo7tudsso2s',
    host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    dialect: 'postgres',
    use_env_variable: DATABASE_URL,
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  production: {
    username: 'zfigpyxltlqmmv',
    password: '278bb11c6a017c188a8d3de1cdbbf4f4274052bfc13614cf08e5c5fc1950e995',
    database: 'dgvo7tudsso2s',
    host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    dialect: 'postgres',
    use_env_variable: DATABASE_URL,
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
};