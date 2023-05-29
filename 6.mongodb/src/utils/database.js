const mongoose = require('mongoose');

// const DB_URL = "mongodb://localhost:27017/pepito"; //CONEXION MONGO COMPASS
const DB_URL = "mongodb+srv://root:root@cluster0.imov6up.mongodb.net/pepito?retryWrites=true&w=majority";
// mongodb+srv://MIUSUARIO:MICONTRASEÑA@cluster0.imov6up.mongodb.net/NOMBREBBDD?retryWrites=true&w=majority

const connect = async() => {
    try {
        //Conectamos a nuestra BBDD

        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;

        console.log(`Connected to ${name} DB in host:${host}`);
    } catch (error) {
        console.log("Hemos tenido un error al conectar a la BBDD", error);
    }
}

module.exports = {connect};