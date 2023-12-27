const express = require('express');
const Orders = require('../models/orders');
const router = express.Router();

router
.get("/", async (req,res,next)=>{
  try {
    const orderData = await Orders.findAll();
    // console.log('food',foodData);
    res.status(201).send(orderData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.get("/detail", async (req,res,next)=>{
  try {
    const orderData = await Orders.findOne({where:{id:req.query.id}});
    // console.log('food',foodData);
    res.status(201).send(orderData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;