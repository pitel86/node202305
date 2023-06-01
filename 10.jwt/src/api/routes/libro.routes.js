const express = require('express');
const {getLibros, postLibros, putLibros, deleteLibros} = require('../controllers/libro.controller');
const { pruebaMiddleware, isAuth, isAdmin } = require('../../middlewares/auth');
const librosRouter = express.Router();

librosRouter.get('/', isAdmin, getLibros)
librosRouter.post('/', postLibros)
librosRouter.delete('/:id', deleteLibros)
librosRouter.put('/:id', putLibros)

module.exports = librosRouter;