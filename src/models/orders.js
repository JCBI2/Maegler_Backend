var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        id_repartidor: { ref:"Employee", type: mongoose.Schema.Types.ObjectId },
        id_cliente: { ref:"cliente", type: mongoose.Schema.Types.ObjectId, required: true },
        nombre_empresa: { type: String, required: true},
        productos: { type: Array, required: true},
        logo: { type: String, required: true},
        estado: { type: String, default: "En proceso"},
        direccion: { type: mongoose.Schema.Types.Mixed },
        subtotal: { type: Number, required: true},
        total: { type: Number, required: true},
        metodo_pago: { type: String, default: "Efectivo"}
    },{timestamps: true}
);

module.exports = mongoose.model('ordenes', esquema);