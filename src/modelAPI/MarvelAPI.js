const fetch = require('node-fetch');
// const { hash, ts, publicKey } = require('../auth/hashAPI')

// const hashResult = JSON.stringify(hash());

const allCharacters = async () =>{
  const characters = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=95418ebca9cf702b7f32d48ad8d102ec&hash=24974394572ad39cae74e4145bacde78`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return characters.data.results;
}

const characterById = async (id) =>{
  const character = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=95418ebca9cf702b7f32d48ad8d102ec&hash=24974394572ad39cae74e4145bacde78&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  return character.data.results;
}

const allComics = async () =>{
  const comics = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=95418ebca9cf702b7f32d48ad8d102ec&hash=24974394572ad39cae74e4145bacde78`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json());
  return comics.data.results;
}

const comicById = async (id) =>{
  const comic = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=95418ebca9cf702b7f32d48ad8d102ec&hash=24974394572ad39cae74e4145bacde78&id=${id}`,{ method: "GET", headers:{ "Content-Type": "application/json"}})
  .then((response)=>response.json())
  console.log(comic)
  return comic.data.results;
}

module.exports = {
  characterById,
  allCharacters,
  allComics,
  comicById
};