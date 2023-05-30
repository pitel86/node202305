const express = require('express');
const {connect} = require('./src/utils/db');
const comidaRoutes = require('./src/api/routes/comida.routes');

const PORT = 7000;
const app = express();
connect();


app.use(express.json()); //Nos permiten recibir json e interpretarlos desde un front postman o lo que necesitemos
app.use(express.urlencoded({extended: false})); 


app.use('/comidas', comidaRoutes);

app.listen(PORT,  () => console.log('listening on port', PORT));