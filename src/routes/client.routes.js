var express = require('express');
var router = express.Router();
var client = require('../models/client');
var mongoose = require('mongoose');
var {verifyToken} = require('../middlewares/auth.middleware')
const jwt = require("../modules/jwt.js")



router.get('/client', verifyToken, function(req, res){
    client.findById(req.user.id, {password: false}).then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
})

router.post('/', async function(req, res){
    let user = new client({
        nombre_completo: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    });

    user.password = await user.encryptPass(user.password)

    user.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

router.post('/login', async function(req, res){
    let rev = await client.findOne({email: req.body.email})
    console.log(rev)
    if(!rev){
        return res.status(404).send({ message: 'User not found'})
    }

    const userIsValid = await rev.verifyPass(req.body.password, rev.password)

    console.log(req.body.password)
    console.log(rev.password)
    console.log(!userIsValid)

    if(!userIsValid){
        return res.status(400).send({ message: "Incorrect password"})
    }

    const token = await jwt.generateToken(rev._id, "client")
    
    res.status(200).send({ message: "User logged", token})

    
    

})


module.exports = router;