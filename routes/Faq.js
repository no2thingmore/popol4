const express = require('express');
const Faq = require('../models/Faq');

const router = express.Router();

router
.get('/', async(req,res,next)=>{
  try {
    const foodData = await Faq.findAll();
    // console.log('food',foodData);
    res.status(201).send(foodData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.get('/update', async(req,res,next)=>{
  try {
    const foodData = await Faq.findOne({where:{id:req.query.id}});
    // console.log('food',foodData);
    res.status(201).send(foodData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.post('/admin', async(req,res,next)=>{
  try {
    console.log(req.body);
    // const foodData = await Faq.create({

    // });
    res.status(201).end()
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.patch('/admin',(req,res,next)=>{
  res.status(201).end()

})
module.exports = router;