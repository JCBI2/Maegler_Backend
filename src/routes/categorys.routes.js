var express = require('express');
var router = express.Router();
var category = require('../models/category');
var mongoose = require('mongoose');


router.get('/', function(req, res){
    category.find({}, {nombre: true, imagen: true, empresas: true}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});


module.exports = router;