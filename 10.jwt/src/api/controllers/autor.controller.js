const Autor = require('../models/autor.model');

const getAutores = async(req,res) => {
    try {
        const allAutores = await Autor.find().populate("titulos", "titulo genero tipo");
        return res.status(200).json(allAutores);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postAutores = async(req,res) => {
    try {
        const newAutor = new Autor(req.body);
        const createdAutor = await newAutor.save();
        return res.status(201).json(createdAutor);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putAutores = async(req,res) => {
    try {
        const {id} = req.params;
        const putAutor = new Autor(req.body);
        putAutor._id = id;
        
        const updatedAutor = await Autor.findByIdAndUpdate(id, putAutor, {new: true})
        if(!updatedAutor){
            return res.status(404).json({message: "El id de este autor no existe"});
        }
        return res.status(200).json(updatedAutor);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAutores = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedAutor = await Autor.findByIdAndDelete(id);
        if(!deletedAutor){
            return res.status(404).json({message: "El id del autor no existe"});
        }
        return res.status(200).json(deletedAutor)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getAutores, postAutores, putAutores, deleteAutores}