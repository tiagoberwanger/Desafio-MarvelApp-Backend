# Marvel App - Backend

### Aplicação backend responsável pela requisição e resposta dos dados da API da [Marvel](https://developer.marvel.com/) e pela integração com login e cadastro de usuários.

# Tabela de Conteúdos

### Features

- [x] Cadastro de novos usuários
- [x] Atualização de usuários
- [x] Autenticação de login
- [x] Geração de token JWT
- [x] Validação do token com JWT
- [x] Validação dos campos do usuário com JOI
- [x] Validação dos campos do login com JOI
- [x] Requisição de todos os comics
- [x] Requisição de todos os characteres
- [x] Requisição de um comic específico
- [x] Requisição de um character específico

# Pré-requisitos e como rodar a aplicação localmente

## Pré-requisitos

Instalar o [NodeJS](https://nodejs.org/pt-br/download/package-manager/) na sua máquina.  
Instalar o [MySQL](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela) em sua máquina e gerar um **username** e **password**.  
Fazer um cadastro na [MarvelAPI](https://developer.marvel.com/) e gerar sua **public key** e **private key**.  

### Clone este repositório
$ git clone <https://github.com/tiagoberwanger/Desafio-Stone-Backend.git>

### Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-Stone-Backend/

### Instale as dependências
$ npm install

### Crie um arquivo .env e insira o seguinte conteúdo:
PORT=3001  
MYSQL_USER=(seu username)  
MYSQL_PASSWORD=(seu password)  
DATABASE=marvel_api  
HOSTNAME=localhost  
CORS=http://localhost:3000  
TS=1  
PRIVATE_KEY=(sua private key)  
PUBLIC_KEY=(sua public key)  

### Rode os comandos do sequelize  
$ npx sequelize db:create  
$ npx sequelize db:migrate  
$ npx sequelize db:seed:all  
PS: Esse último comando habilita um usuário teste com as seguintes credenciais:  
  email: teste@email.com  
  password: 123456  


### Execute a aplicação 
$ npm start

### O servidor inciará na porta:3001 - acesse <http://localhost:3001>

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Joi](https://joi.dev/api/?v=17.4.0)
- [JWT](https://jwt.io/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/) *teste local
- [PostgresSQL](https://www.postgresql.org/) *deploy no Heroku

# Submissão

A submissão desse projeto foi feita no [Heroku](https://heroku.com/), e está pronta pra uso no seguinte [link](https://marvel-app-bk.herokuapp.com/)

# Autor

### Tiago Berwanger
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/lucasgdb)](https://github.com/tiagoberwanger)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-bittencourt/)](https://www.linkedin.com/in/tiago-berwanger/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:berwangertiago@gmail.com)](mailto:berwangertiago@gmail.com)

# Licença

MIT License

Copyright (c) 2021 Tiago Berwanger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
