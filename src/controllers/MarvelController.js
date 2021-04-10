const { Router } = require('express');

const MarvelController = new Router();
const { getAllCharacters, getCharacterById, getAllComics, getComicById } = require('../services/MarvelService');
const TokenValidation = require('../auth/TokenValidation');

MarvelController.get('/characters/:id', TokenValidation, getCharacterById);

MarvelController.get('/characters', TokenValidation, getAllCharacters);

MarvelController.get('/comics/:id', TokenValidation, getComicById);

MarvelController.get('/comics', TokenValidation, getAllComics);


module.exports = MarvelController;