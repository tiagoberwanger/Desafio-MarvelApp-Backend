const serializeCharacters = (characters) => {
  const serialize = characters.map(({id, name, description, comics, thumbnail}) => {
    return {
      id,
      name: name,
      description,
      features: comics,
      thumbnail,
      type: 'characters'
    }
  })
  return serialize;
  }
  
const serializeComics = (comics) => {
  const serialize = comics.map(({id, title, description, characters, thumbnail}) => {
    return {
      id,
      name: title,
      description,
      features: characters,
      thumbnail,
      type: 'comics'
    }
  })
  return serialize;
}

module.exports ={
  serializeCharacters,
  serializeComics
}
