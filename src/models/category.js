var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        imagen: { type: String, required: true },
        empresas: { type: Array, required: true }
    }
);

module.exports = mongoose.model('categorias', esquema);