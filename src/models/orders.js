var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        id_repartidor: { ref:"Employee", type: mongoose.Schema.Types.ObjectId },
        id_cliente: { ref:"cliente", type: mongoose.Schema.Types.ObjectId, required: true },
        nombre_empresa: { type: String, required: true},
        productos: { type: Array, required: true},
        estado: { type: String, default: "En proceso"},
        direccion: { latitud: String, longitud: String },
        subtotal: { type: Number, required: true},
        total: { type: Number, required: true},
        metodo_pago: { type: String, default: "Efectivo"}
    }
);

module.exports = mongoose.model('ordenes', esquema);