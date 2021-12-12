var mongoose = require('mongoose');
const bcrypt = require("bcrypt")

var esquema = new mongoose.Schema(
    {
        nombre_completo: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    }
);

esquema.methods.encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

esquema.methods.verifyPass = async (password, encryptedPassword) => {
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = mongoose.model('clientes', esquema);