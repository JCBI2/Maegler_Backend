const { model, Schema } = require("mongoose")

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

module.exports = model('Employee', employeeSchema)