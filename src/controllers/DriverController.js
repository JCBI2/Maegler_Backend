const Employee = require("../models/Employee.js")
const jwt = require("../modules/jwt.js")

class DriverController {
    constructor() { }

    getDrivers(req, res) {
        Employee.find({}, { password: 0, position: 0, commission: 0, updatedAt: 0}).then((result) => {
            res.status(200).send({ employees: result })
        }).catch(err => res.status(400).send({ message: err }))
    }

    getDriver(req, res) {
        if(req.user.role == "driver"){
            Employee.findById(req.user.id, {position: 0}).then((result) => {
                res.status(200).send({ employee: result })
            }).catch(err => res.status(400).send({ message: err }))
        }else{
            Employee.findById(req.user.id, {password: 0, position: 0, commission: 0, email: 0}).then((result) => {
                res.status(200).send({ employee: result })
            }).catch(err => res.status(400).send({ message: err }))
        }
    }

    async changeDriverPassword(req, res){
        const employee = await Employee.findById(req.user.id)
        try{
            employee.password = await employee.encryptPass(req.body.password)
            await employee.save()
            res.status(200).send({ message: 'Password changed'})
        }catch(err){
            res.status(400).send({ message: err})
        }
    }

    async registerDriver(req, res) {
        const employee = new Employee(req.body)
        employee.password = await employee.encryptPass(employee.password)
        try{
            await employee.save()
            res.status(201).send({ message: "user created" })
        }catch(err){
            if(err.code === 11000){
                res.status(400).send({message: "Email already exists"})
            }
        }
    }

    approveDriver(req, res) {
        Employee.findByIdAndUpdate(req.params.id, {
            request_status: "approved"
        }).then(result => {
            res.status(200).send({
                message: "Driver approved"
            })
        }).catch(err => res.status(400).send({ message: err }))
    }

    async loginDriver(req, res) {
        const employee = await Employee.findOne({email: req.body.email}, { _id: 1, password: 1, position: 1})
        if(!employee){
            return res.status(404).send({ message: 'User not found'})
        }

        const userIsValid = await employee.verifyPass(req.body.password, employee.password)

        if(!userIsValid){
            return res.status(400).send({ message: "Incorrect password"})
        }

        const token = await jwt.generateToken(employee._id, employee.position)
        
        res.status(200).send({ message: "User logged", token})
    }

}

module.exports = new DriverController()
