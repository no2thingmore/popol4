const express = require('express');
const Ingredient = require('../models/ingredient');

const router = express.Router();

router
.get('/admin', (req,res,next)=>{
    Ingredient.findAll()
    .then((result)=>{
      res.status(201).send(result)
    })
    .catch((err)=>{
      res.status(500).send(err)
    })
})

.get('/ingreDient', (req,res,next)=>{
    Ingredient.findAll()
    .then((result)=>{
      res.status(201).send(result)
    })
    .catch((err)=>{
      res.status(500).send(err)
    })
})
//test
module.exports = router;