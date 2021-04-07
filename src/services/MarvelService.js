const { characterByName, allCharacters, allComics } = require('../models/MarvelAPI')

const getAllCharacters = async (req, res) => {
  const characters = await allCharacters();
  return res.status(200).json(characters);
}

const getCharacterByName = async (req, res) => {
  const { q } = req.query;
  const character = await characterByName(q);
  if (!character || character.length === 0) {
    return res.status(404).json({ message: 'character not found' })
  }
  return res.status(200).json(character);
}

const getAllComics = async (req, res) => {
  const comics = await allComics();
  return res.status(200).json(comics);
}

module.exports = {
  getAllCharacters,
  getCharacterByName,
  getAllComics,
};