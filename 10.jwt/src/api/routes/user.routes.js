const express = require('express');
const {login, register} = require('../controllers/user.controller');
const userRoutes = express.Router();

userRoutes.post('/login', login)
userRoutes.post('/register', register);

module.exports = userRoutes;