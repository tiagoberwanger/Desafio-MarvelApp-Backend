const jwt = require('jsonwebtoken');

const TokenCreation = (email) => {
  const secret = 'amazingsecret';
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  return jwt.sign({ data: email }, secret, jwtConfig);
};

module.exports = TokenCreation;
