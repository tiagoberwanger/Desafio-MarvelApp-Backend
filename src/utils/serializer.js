const serializeCharacters = (characters) => {
  const serialize = characters.map(({id, name, description, comics, thumbnail, urls}) => {
    return {
      id,
      name: name,
      description,
      features: comics,
      thumbnail,
      type: 'characters', 
      urls
    }
  })
  return serialize;
  }
  
const serializeComics = (comics) => {
  const serialize = comics.map(({id, title, description, characters, thumbnail, urls}) => {
    return {
      id,
      name: title,
      description,
      features: characters,
      thumbnail,
      type: 'comics',
      urls
    }
  })
  return serialize;
}

module.exports ={
  serializeCharacters,
  serializeComics
}
