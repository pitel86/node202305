import express from 'express'; //Esta sería una alternativa para importar paquetes, tenemos que tener el "type": "module" en el package.json
// const express = require('express');
const app = express();
const PORT = 5000;

//COnfiguracies para recibir jsons
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//CRUD --> CREATE READ UPDATE AND DELETE
//GET --> READ --> Lee información y la devuelve
//POST --> CREATE --> Envía informacion para crear un nuevo elemento
//DELETE --> DELETE --> Elimina uno o más elementos
//PUT / PATCH --> UPDATE --> Envía información y la actualiza

//Enrutaremos estos metodos a un endpoint

const routerMovies = express.Router();

routerMovies.get('/pepe', (req, res) => {
    res.send("este es el get de movies de pepe");
})

routerMovies.get('/title/:pepe', (req, res) => {
    const {pepe} = req.params;
    res.send("este es el get de movies de pepe2" + pepe);
})

routerMovies.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send("este es el get de movies de " + id);
})

routerMovies.get('/', (req, res) => {
    res.send("este es el get de movies");
})
routerMovies.post('/', (req, res) => {
    console.log(req.body);
    res.send("este es el post de movies");
})

routerMovies.put('/', (req, res) => {
    res.send("este es el put de movies");
})

routerMovies.patch('/', (req, res) => {
    res.send("este es el patch de movies");
})

routerMovies.delete('/', (req, res) => {
    res.send("este es el delete de movies");
})


app.use('/movies', routerMovies)



app.listen(PORT, () => console.log(`listen on port ${PORT}`));
