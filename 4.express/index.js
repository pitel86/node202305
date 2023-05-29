const express = require('express'); //Importamos la librería de express 

const PORT = 5000;
const app = express(); //creamos un servidor con expressç

app.use('/movies', (req, res) => {
    const movies = [
        {
            title: "Cazafantasmas",
            year: 1990
        },{
            title: "El señor de los anillos",
            year: 2001
        }
    ]
    res.send(movies)
})

app.use('/songs', (req, res) => {
    const songs = [
        {
            title: "Welcome to the jungle",
            artist: "Guns and Roses"
        },
        {
            title: "Enter Sandman",
            artist: "Metallica"
        }
    ]

    res.send(songs);
})


app.use('/', (req, res) => {
    res.send("estoy en la home")
})


app.listen(PORT, () =>  console.log('listening on port', PORT))