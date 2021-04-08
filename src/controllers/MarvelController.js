const { Router } = require('express');

const MarvelController = new Router();
const { getAllCharacters, getCharacterByName, getAllComics, getComicByName } = require('../services/MarvelService');
const TokenValidation = require('../auth/TokenValidation');

MarvelController.get('/characters/name', TokenValidation, getCharacterByName);

MarvelController.get('/characters', TokenValidation, getAllCharacters);

MarvelController.get('/comics/name', TokenValidation, getComicByName);

MarvelController.get('/comics', TokenValidation, getAllComics);


module.exports = MarvelController;