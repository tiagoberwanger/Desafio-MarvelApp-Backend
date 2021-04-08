const { Router } = require('express');

const LoginValidation = require('../middlewares/LoginValidation');
// const TokenDecodification = require('../auth/TokenDecodification');

const LoginController = new Router();
const {
  LoginService,
} = require('../services/LoginService');

LoginController.post('/login', LoginValidation, LoginService);

module.exports = LoginController;
