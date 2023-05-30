const Restaurante = require("../models/restaurante.model");


const getRestaurante = async (req, res) => {
    try {
        const allRestaurantes = await Restaurante.find().populate("carta", "nombre pais");
        return res.status(200).json(allRestaurantes);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postRestaurante = async (req, res) => {
    try {
        const newRestaurante = new Restaurante(req.body);
        const createdRestaurante = await newRestaurante.save();
        return res.status(201).json(createdRestaurante);        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putRestaurante = async (req, res) => {
    try {
        
        res.send("este es el put de restaurante")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteRestaurante = async (req, res) => {
    try {
        
        res.send("este es el delete de restaurante")
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getRestaurante, postRestaurante, putRestaurante, deleteRestaurante}   