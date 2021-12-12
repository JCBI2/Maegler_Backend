const { Router } = require("express")
const Category = require("../models/category")
const mongoose = require("mongoose")

const router = Router()

router.get("/", async (req, res) => {
    const empresas = await Category.find({}, { "empresas.nombre": 1, "empresas.logo": 1 })
    const info = []
    empresas.map(el => {
        {
            info.push.apply(info, el.empresas)
        }
    })
    res.status(200).send({ companies: info })
})

router.get("/:name", async (req, res) => {
    const empresas = await Category.findOne({ "empresas.nombre": req.params.name }, { empresas: 1 })

    empresas.empresas.map(el => {
        if (el.nombre === req.params.name) {
            return res.status(200).send({ company: el })
        }
    })
})

router.post("/:name/products/add", async (req, res) => {
    const product = {
        id: mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        informacion: req.body.informacion,
        precio: req.body.precio
    }

    const categoria = await Category.findOneAndUpdate({"empresas.nombre": req.params.name}, { $push :{
        "empresas.$.productos" : product
    }})

    categoria.save()
   
    res.send({ message: "User modified" })
})

module.exports = router