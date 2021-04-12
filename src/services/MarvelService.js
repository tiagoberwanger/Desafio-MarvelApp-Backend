const { 
  characterById, 
  allCharacters, 
  allComics, 
  comicById, 
  characterBySearchTerm,
  comicBySearchTerm
} = require('../modelAPI/MarvelAPI')

const STATUS_OK = 200;
const NOT_FOUND = 404;

const getAllCharacters = async (req, res) => {
  const characters = await allCharacters();
  res.status(STATUS_OK).json(characters);
}

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const character = await characterById(id);
  if (!character) {
    return res.status(NOT_FOUND).json({ message: 'Personagem não encontrado' })
  }
  return res.status(STATUS_OK).json(character);
}

const getAllComics = async (req, res) => {
  const comics = await allComics();
  return res.status(STATUS_OK).json(comics);
}

const getComicById = async (req, res) => {
  const { id } = req.params;
  const comic = await comicById(id);
  if (!comic) {
    return res.status(NOT_FOUND).json({ message: 'Comic não encontrado' })
  }
  return res.status(STATUS_OK).json(comic);
}

const getCharacterBySearchTerm = async (req, res) => {
  const { q } = req.query;
  const characterStartsWith = await characterBySearchTerm(q);
  return res.status(STATUS_OK).json(characterStartsWith);
}

const getComicBySearchTerm = async (req, res) => {
  const { q } = req.query;
  const comicStartsWith = await comicBySearchTerm(q);
  return res.status(STATUS_OK).json(comicStartsWith);
}

module.exports = {
  getAllCharacters,
  getCharacterById,
  getAllComics,
  getComicById,
  getCharacterBySearchTerm,
  getComicBySearchTerm,
};
