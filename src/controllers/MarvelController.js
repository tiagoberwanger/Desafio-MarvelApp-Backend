const { Router } = require('express');

const MarvelController = new Router();
const { 
  getAllCharacters, 
  getCharacterById,
  getAllComics, 
  getComicById, 
  getCharacterBySearchTerm,
  getComicBySearchTerm
} = require('../services/MarvelService');
const TokenValidation = require('../auth/TokenValidation');

MarvelController.get('/characters/search', TokenValidation, getCharacterBySearchTerm)

MarvelController.get('/characters/:id', TokenValidation, getCharacterById);

MarvelController.get('/characters', TokenValidation, getAllCharacters);

MarvelController.get('/comics/search', TokenValidation, getComicBySearchTerm)

MarvelController.get('/comics/:id', TokenValidation, getComicById);

MarvelController.get('/comics', TokenValidation, getAllComics);



module.exports = MarvelController;