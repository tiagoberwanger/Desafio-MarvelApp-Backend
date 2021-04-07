const { Router } = require('express');

const MarvelController = new Router();
const { getAllCharacters, getCharacterByName, getAllComics } = require('../services/MarvelService');
const TokenValidation = require('../auth/TokenValidation');

MarvelController.get('/character/name', TokenValidation, getCharacterByName);

MarvelController.get('/characters', TokenValidation, getAllCharacters);

MarvelController.get('/comics', TokenValidation, getAllComics);


module.exports = MarvelController;