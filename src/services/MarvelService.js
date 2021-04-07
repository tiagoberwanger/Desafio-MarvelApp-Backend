const { characterByName, allCharacters, allComics } = require('../modelAPI/MarvelAPI')

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
    return res.status(NOT_FOUND).json({ message: 'character not found' })
  }
  return res.status(STATUS_OK).json(character);
}

const getAllComics = async (req, res) => {
  const comics = await allComics();
  return res.status(STATUS_OK).json(comics);
}

module.exports = {
  getAllCharacters,
  getCharacterByName,
  getAllComics,
};