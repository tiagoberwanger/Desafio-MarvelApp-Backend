const express = require('express');
const app = express();
const CharactersController = require('./src/controllers/CharactersController')
const port = process.env.PORT || 3001

app.use(express.json());

app.use('/character', CharactersController);

app.listen(port, () => console.log(`Running at ${port}`))
