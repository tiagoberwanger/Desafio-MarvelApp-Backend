const fetch = require('node-fetch');
const { hash, ts, publicKey } = require('../auth/hashAPI')

const hashResult = hash();

const allCharacters = async () =>{
  const characters = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return characters.data.results;
}

const characterById = async (id) =>{
  const character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=1&ts=${ts}&apikey=${publicKey}&hash=${hashResult}&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return character.data.results;
}

const allComics = async () =>{
  const comics = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return comics.data.results;
}

const comicById = async (id) =>{
  const comic = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=1&ts=${ts}&apikey=${publicKey}&hash=${hashResult}&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return comic.data.results;
}

module.exports = {
  characterById,
  allCharacters,
  allComics,
  comicById
};