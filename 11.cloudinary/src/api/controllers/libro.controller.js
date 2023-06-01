const { deleteFile } = require('../../middlewares/delete.file');
const Libro = require('../models/libro.model');

const getLibros = async(req,res) => {
    try {
        const allLibros = await Libro.find();
        return res.status(200).json(allLibros);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postLibros = async(req,res) => {
    try {
        console.log(req.file)
        const newLibro = new Libro(req.body);
        if(req.file){
            newLibro.portada = req.file.path;
        }
        const createdLibro = await newLibro.save();
        return res.status(201).json(createdLibro);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putLibros = async(req,res) => {
    try {
        const {id} = req.params;
        const putLibro = new Libro(req.body);
        putLibro._id = id;        
        if(req.file){
            putLibro.portada = req.file.path;
        }
        const updatedLibro = await Libro.findByIdAndUpdate(id, putLibro)
        if(!updatedLibro){
            return res.status(404).json({message: "El id de este libro no existe"});
        }
        if(updatedLibro.portada !== putLibro.portada){
            deleteFile(updatedLibro.portada);
        }
        return res.status(200).json(updatedLibro);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteLibros = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedLibro = await Libro.findByIdAndDelete(id);
        if(!deletedLibro){
            return res.status(404).json({message: "El id del libro no existe"});
        }
        return res.status(200).json(deletedLibro)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getLibros, postLibros, putLibros, deleteLibros}