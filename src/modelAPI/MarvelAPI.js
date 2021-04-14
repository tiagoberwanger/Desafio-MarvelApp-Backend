const fetch = require('node-fetch');
const { hash, ts, publicKey } = require('../auth/hashAPI')

const hashResult = hash();

const allCharacters = async () =>{
  const characters = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return characters.data.results;
}

const characterById = async (id) =>{
  const character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=1&ts=${ts}&apikey=${publicKey}&hash=${hashResult}&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return character.data.results;
}

const allComics = async () =>{
  const comics = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return comics.data.results;
}

const comicById = async (id) =>{
  const comic = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=1&ts=${ts}&apikey=${publicKey}&hash=${hashResult}&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return comic.data.results;
}

const characterBySearchTerm = async (name) => {
  const characterStartsWith = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return characterStartsWith;
}

const comicBySearchTerm = async (title) => {
  const comicStartsWith = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${title}&ts=${ts}&apikey=${publicKey}&hash=${hashResult}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return comicStartsWith;
}

module.exports = {
  characterById,
  allCharacters,
  allComics,
  comicById,
  characterBySearchTerm,
  comicBySearchTerm,
};