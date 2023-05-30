const express = require('express');
const {getComidasPepe, getComidas, postComidas, putComidas, deleteComidas} = require('../controllers/comida.controller');

const comidaRoutes = express.Router();

comidaRoutes.get('/pepe', getComidasPepe)

comidaRoutes.get('/', getComidas)

comidaRoutes.post('/', postComidas)

comidaRoutes.put('/', putComidas)

comidaRoutes.delete('/', deleteComidas)

module.exports= comidaRoutes;