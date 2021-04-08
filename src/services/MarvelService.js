const { characterByName, allCharacters, allComics, comicByName } = require('../modelAPI/MarvelAPI')

const STATUS_OK = 200;
const NOT_FOUND = 404;

const getAllCharacters = async (req, res) => {
  const characters = await allCharacters();
  return res.status(STATUS_OK).json(characters);
}

const getCharacterByName = async (req, res) => {
  const { q } = req.query;
  const character = await characterByName(q);
  if (!character || character.length === 0) {
    return res.status(NOT_FOUND).json({ message: 'Personagem não encontrado' })
  }
  return res.status(STATUS_OK).json(character);
}

const getAllComics = async (req, res) => {
  const comics = await allComics();
  return res.status(STATUS_OK).json(comics);
}

const getComicByName = async (req, res) => {
  const { q } = req.query;
  const comic = await comicByName(q);
  if (!comic || comic.length === 0) {
    return res.status(NOT_FOUND).json({ message: 'Comic não encontrado' })
  }
  return res.status(STATUS_OK).json(comic);
}

module.exports = {
  getAllCharacters,
  getCharacterByName,
  getAllComics,
  getComicByName
};