const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const librosRouter = require('./src/api/routes/libro.routes');
const autoresRouter = require('./src/api/routes/autor.routes');
const userRouter = require('./src/api/routes/user.routes');

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/libros', librosRouter);
app.use('/autores',isAuth, autoresRouter);
app.use('/users', userRouter);



app.listen(PORT, () => console.log('listening on port', PORT));