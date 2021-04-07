const { Router } = require('express');

const UserValidation = require('../middlewares/UserValidation');

const TokenValidation = require('../auth/TokenValidation');

// const TokenDecodification = require('../auth/TokenDecodification');

const UserController = new Router();
const {
  createUser,
  getUsers,
  getUserById,
} = require('../services/UserService');

UserController.post('/user', UserValidation, createUser);

UserController.get('/user', TokenValidation, getUsers);

UserController.get('/user/:id', TokenValidation, getUserById);

module.exports = UserController;
