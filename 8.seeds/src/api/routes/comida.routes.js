const express = require('express');
const {getComidasByID,getComidasByPais, getComidas, postComidas, putComidas, deleteComidas} = require('../controllers/comida.controller');

const comidaRoutes = express.Router();

comidaRoutes.get('/pais/:pais', getComidasByPais)

comidaRoutes.get('/:id', getComidasByID)

comidaRoutes.get('/', getComidas)

comidaRoutes.post('/', postComidas)

comidaRoutes.put('/:id', putComidas)

comidaRoutes.delete('/:id', deleteComidas)

module.exports= comidaRoutes;