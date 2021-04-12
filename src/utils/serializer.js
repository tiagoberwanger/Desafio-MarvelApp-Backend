const serializeCharacters = (characters) => {
  const serializeCharacters = characters.map(({id, name, description, comics, thumbnail}) => {
    return {
      id,
      name: name,
      description,
      features: comics,
      thumbnail,
  
    }})
  }
  
const serializeComics = (comics) => {
  const serializeComics = comics.map(({id, title, description, characters, thumbnail}) => {
    return {
      id,
      name: title,
      description,
      features: characters,
      thumbnail,
    }
  })
}

export default {
  serializeCharacters,
  serializeComics
}
