const { Router } = require('express');

const CharactersController = new Router();
const { getCharacterByName } = require('../services/getCharacter');

CharactersController.get('/', getCharacterByName);

module.exports = CharactersController;