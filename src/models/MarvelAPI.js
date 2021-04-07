const fetch = require('node-fetch');
const { hash, ts, publicKey } = require('../auth/hashAPI')

const getCharacter = async (name) =>{
  const character = fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash()}&name=${name}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  .then(({data})=> data.results);
  return character;
}

module.exports = {
  getCharacter
};