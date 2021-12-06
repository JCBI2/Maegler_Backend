const Employee = require("../models/Employee.js")

class DriverController {
    constructor() { }

    getDrivers(req, res) {
        Employee.find().then( (result) => {
            res.status(200).send({ employees: result})
        }).catch( err => res.status(400).send({ message: err}))
    }

    getDriver(req, res){
        Employee.findById(req.params.id).then( (result) => {
            res.status(200).send({employee: result})
        }).catch( err => res.status(400).send({ message: err}))
    }

    addNewDriver(req, res) {
        const employee = new Employee(req.body)
        employee.save().then( (result) => {
            res.status(201).send({message: "user created"})
        }).catch( err => res.status(400).send({message: err}))

    }
}

module.exports = new DriverController()
