const express = require('express');

const {getRestaurante, postRestaurante, putRestaurante, deleteRestaurante} = require('../controllers/restaurante.controller');
const restauranteRoutes = express.Router();


restauranteRoutes.get('/', getRestaurante)
restauranteRoutes.post('/', postRestaurante)
restauranteRoutes.put('/', putRestaurante)
restauranteRoutes.delete('/', deleteRestaurante)


module.exports = restauranteRoutes;