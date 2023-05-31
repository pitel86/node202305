const express = require('express');
const {getAutores, postAutores, putAutores, deleteAutores} = require('../controllers/autor.controller');
const autoresRouter = express.Router();

autoresRouter.get('/', getAutores)
autoresRouter.post('/', postAutores)
autoresRouter.delete('/:id', deleteAutores)
autoresRouter.put('/:id', putAutores)

module.exports = autoresRouter;