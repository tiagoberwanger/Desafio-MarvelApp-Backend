const express = require('express');
const app = express();
const MarvelController = require('./src/controllers/MarvelController')
const UserController = require('./src/controllers/UserController')
const LoginController = require('./src/controllers/LoginController')
const port = process.env.PORT || 3001

app.use(express.json());

app.use('/', MarvelController);

app.use('/', UserController);

app.use('/', LoginController);

app.listen(port, () => console.log(`Running at ${port}`))
