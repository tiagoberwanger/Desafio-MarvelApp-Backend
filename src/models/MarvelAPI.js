const fetch = require('node-fetch');
const { hash, ts, publicKey } = require('../auth/hashAPI')

const hashResult = hash();

const allCharacters = async () =>{
  const characters = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return characters.data.results;
}

const characterByName = async (name) =>{
  const character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashResult}&name=${name}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return character.data.results;
}

const allComics = async () =>{
  const comics = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return comics.data.results;
}

module.exports = {
  characterByName,
  allCharacters,
  allComics
};