const express = require('express');
const {getLibros, postLibros, putLibros, deleteLibros} = require('../controllers/libro.controller');
const { pruebaMiddleware, isAuth } = require('../../middlewares/auth');
const librosRouter = express.Router();

librosRouter.get('/', [isAuth], getLibros)
librosRouter.post('/', postLibros)
librosRouter.delete('/:id', deleteLibros)
librosRouter.put('/:id', putLibros)

module.exports = librosRouter;