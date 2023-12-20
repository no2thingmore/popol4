const express = require('express');
const Ingredient = require('../models/ingredient');

const router = express.Router();

router
.get("/", async (req,res,next)=>{
  try {
    const ingredientData = await Ingredient.findAll();
    // console.log('food',foodData);
    res.status(201).send(ingredientData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})


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
module.exports = router;