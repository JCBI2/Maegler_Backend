var express = require('express');
var router = express.Router();
var order = require('../models/orders');
var mongoose = require('mongoose');

router.post('/', function(req, res){
    console.log(req.body);
    let or = new order({
        id_cliente: req.body.id_cliente,
        nombre_empresa: req.body.empresa,
        productos: req.body.productos,
        subtotal: req.body.subtotal,
        total: req.body.total,
        metodo_pago: req.body.metodo_pago
    });

    or.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});


module.exports = router;