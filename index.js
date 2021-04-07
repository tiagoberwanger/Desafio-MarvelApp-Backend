const express = require('express');
const app = express();
const MarvelController = require('./src/controllers/MarvelController')
const UserController = require('./src/controllers/UserController')
const port = process.env.PORT || 3001

app.use(express.json());

app.use('/', MarvelController);

app.use('/', UserController);

app.listen(port, () => console.log(`Running at ${port}`))
