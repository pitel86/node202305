//NPM tiene integrado un paquete http

const http = require('http');

const PORT = 5000;

//Creamos nuestro manejador de eventos
const requestHandler = (req, res) => {
    //req será la petición que recibimos
    //res será la respuesta que damos
    
    
    res.end("Servidor funcionando")
}



//creamos un servidor y lo guardamos en la variable app, a esta variable le pasaremos un manejador de eventos
const app = http.createServer(requestHandler)


//Con listen le decimos a nuestra app en que puerto escuchará
app.listen(PORT, () => console.log("mi servidor está funcionandod"))