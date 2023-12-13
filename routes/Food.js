const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router
  .get("/admin", async (req,res,next)=>{
    try {
      const foodData = await Food.findAll();
      console.log('food',foodData);
      res.status(201).send(foodData)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })


module.exports = router;