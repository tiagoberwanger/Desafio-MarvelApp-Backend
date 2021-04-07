const { Router } = require('express');

const MarvelController = new Router();
const { getAllCharacters, getCharacterByName, getAllComics } = require('../services/MarvelService');

MarvelController.get('/character/name', getCharacterByName);

MarvelController.get('/characters', getAllCharacters);

MarvelController.get('/comics', getAllComics);


module.exports = MarvelController;