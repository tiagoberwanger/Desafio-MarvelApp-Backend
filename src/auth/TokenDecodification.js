const jwt = require('jsonwebtoken');

const secret = 'amazingsecret';

const TokenDecodification = async (req, _res, next) => {
  const token = req.headers.authorization;
  const decode = jwt.verify(token, secret);
  req.user = decode;
  next();
};

module.exports = TokenDecodification;
