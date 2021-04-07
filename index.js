const express = require('express');
const app = express();
const MarvelController = require('./src/controllers/MarvelController')
const port = process.env.PORT || 3001

app.use(express.json());

app.use('/', MarvelController);

app.listen(port, () => console.log(`Running at ${port}`))
