const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const autorSchema = new Schema(
    {
        nombre: {type: String, required: true},
        pais: {type: String, required: true},
        titulos: [{type: Schema.Types.ObjectId, ref: 'libro'}]
    },{
        timestamps: true
    }
)

const Autor = mongoose.model('autores', autorSchema);

module.exports = Autor;