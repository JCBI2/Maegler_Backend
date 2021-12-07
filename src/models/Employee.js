const { model, Schema } = require("mongoose")
const bcrypt = require("bcrypt")

const employeeSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    request_status: {
        type: String,
        required: false
    },
    position: {
        type: String,
        enum: ['admin', 'driver'],
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    commission: {
        type: Number,
        default: 0.00
    }
},{
    timestamps: true,
    versionKey: false
})

employeeSchema.methods.encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

employeeSchema.methods.verifyPass = async (password, encryptedPassword) => {
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = model('Employee', employeeSchema)