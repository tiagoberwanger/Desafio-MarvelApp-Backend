const axios = require('axios');

const reqCharacterByName = (name) => {
  axios.get(`http://localhost:3001/character/name?q=${name}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) =>{
    if (err.response.status === 404) {
      console.log('Personagem não encontrado!')
    }
  })
}

const reqCharactersAll = () => {
  axios.get(`http://localhost:3001/characters`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) =>{
    if (err.response) {
      console.log('Erro no servidor!')
    }
  })
}

const reqComicsAll = () => {
  axios.get(`http://localhost:3001/comics`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) =>{
    if (err.response.status === 404) {
      console.log('Erro no servidor!')
    }
  })
}

// testing requisitions to use in frontend app:
// reqCharacterByName('hulk');
// reqCharactersAll();
// reqComicsAll();