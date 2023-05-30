const Comida = require("../models/comida.model")

const getComidasByID = async(req, res) => {
    try {
        const {id} = req.params;
        const comida = await Comida.findById(id);
        if(!comida){
           return res.status(404).json({message: 'No tenemos comidas con ese ID'}); 
        }
        return res.status(200).json(comida);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getComidasByPais = async(req, res) => {
    try {
        const {pais} = req.params;
        const comidas = await Comida.find({pais: pais}, 'nombre foto');
        if(comidas.length == 0){
           return res.status(404).json({message: 'El pais indicado no tiene comidas registradas.'}); 
        }
        return res.status(200).json(comidas);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getComidas = async(req, res) => {
    try {
        const allComidas = await Comida.find();
        return res.status(200).json(allComidas);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postComidas = async(req, res) => {
    try {
        console.log(req.body);
        const newComida = new Comida(req.body);
        const createdComida = await newComida.save();   //el metodo save nos sirve para guardar un elemento en BBDD
        return res.status(201).json(createdComida);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putComidas = async(req, res) => {
    try {
        const {id} = req.params;
        const putComida = new Comida(req.body);
        putComida._id = id;
        const updatedCommida = await Comida.findByIdAndUpdate(id, putComida, {new: true});
        if(!updatedCommida){
            return res.status(404).json({message: 'No tenemos comidas con ese ID'}); 
         }
        return res.status(200).json(updatedCommida);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteComidas = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteComida = await Comida.findByIdAndDelete(id);
        if(!deleteComida){
            return res.status(404).json({message: 'No tenemos comidas con ese ID'}); 
         }
        return res.status(200).json(deleteComida);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getComidasByID, getComidasByPais, getComidas, postComidas, putComidas, deleteComidas}