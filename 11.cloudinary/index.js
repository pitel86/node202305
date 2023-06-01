const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('cloudinary').v2;

const librosRouter = require('./src/api/routes/libro.routes');
const autoresRouter = require('./src/api/routes/autor.routes');
const userRouter = require('./src/api/routes/user.routes');

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/libros', librosRouter);
app.use('/autores',isAuth, autoresRouter);
app.use('/users', userRouter);



app.listen(PORT, () => console.log('listening on port', PORT));