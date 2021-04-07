const jwt = require('jsonwebtoken');

const secret = 'amazingsecret';
const STATUS_UNAUTHORIZED = 401;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const TokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: 'Token não encontrado' });
    }
    try {
      jwt.verify(token, secret);
    } catch (error) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: 'Token expirado ou inválido' });
    }
    next();
  } catch (err) {
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = TokenValidation;
