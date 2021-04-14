const { Users } = require('../models');
const TokenCreation = require('../auth/TokenCreation');
const { serializeCharacters, serializeComics } = require('../utils/serializer')

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

const LoginService = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (!user || user.dataValues.email !== email) {
    return res.status(STATUS_BAD_REQUEST).json({ message: 'usuário não cadastrado ou email incorreto' });
  }
  if (user.dataValues.password.toString() !== password) {
    return res.status(STATUS_BAD_REQUEST).json({ message: 'senha incorreta' });
  }

  const token = TokenCreation(email);
  res.status(STATUS_OK).json({ token });
};

module.exports = {
  LoginService,
};
