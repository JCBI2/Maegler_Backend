var express = require('express');
var router = express.Router();
var order = require('../models/orders');
var mongoose = require('mongoose');

router.get('/:idUsuario/alls', function(req, res){
    order.find({
        id_cliente: req.params.idUsuario
    }, 
    ).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.get('/alls', function(req, res){
    order.find({
        "estado": "En proceso"
    }, 
    ).then(result=>{
        result.id_cliente = "Juan Carlos"
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.post('/', function(req, res){
    console.log(req.body);
    let or = new order({
        id_cliente: req.body.id_cliente,
        nombre_empresa: req.body.empresa,
        productos: req.body.productos,
        logo: req.body.logo,
        direccion: req.body.dir,
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