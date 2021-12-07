const Employee = require("../models/Employee.js")

class DriverController {
    constructor() { }

    getDrivers(req, res) {
        Employee.find().then((result) => {
            res.status(200).send({ employees: result })
        }).catch(err => res.status(400).send({ message: err }))
    }

    getDriver(req, res) {
        Employee.findById(req.params.id).then((result) => {
            res.status(200).send({ employee: result })
        }).catch(err => res.status(400).send({ message: err }))
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

    //TODO Mover funcion al controller del admin
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
        const employee = await Employee.findOne({email: req.body.email}, { password: 1 })
        if(!employee){
            return res.status(404).send({ message: 'User not found'})
        }

        const userIsValid = await employee.verifyPass(req.body.password, employee.password)

        if(!userIsValid){
            return res.status(400).send({ message: "Incorrect password"})
        }
        
        res.status(200).send({ message: "User logged"})
    }

}

module.exports = new DriverController()
