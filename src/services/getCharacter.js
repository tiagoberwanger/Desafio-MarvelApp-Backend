const { getCharacter } = require('../models/MarvelAPI')

const getCharacterByName = async (req, res) => {
  const { name } = req.body;
  const character = await getCharacter(name);
  res.status(200).json(character);
}

module.exports = {
  getCharacterByName
};