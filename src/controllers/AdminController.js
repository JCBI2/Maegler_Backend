const Employee = require("../models/Employee")
const jwt = require("../modules/jwt")

class AdminController {
    constructor() { }

    async loginAdmin(req, res){
        const employee = await Employee.findOne({ email: req.body.email }) 
        
        if(!employee){
            return res.status(404).send({message: 'User not found'})
        }

        const userIsValid = employee.password === req.body.password

        if(!userIsValid){
            return res.status(401).send({ message: 'Unauthorized user'})
        }

        const token = await jwt.generateToken(employee._id, employee.position)

        res.status(200).send({ message: 'User logged', token})

    }

}

module.exports = new AdminController()