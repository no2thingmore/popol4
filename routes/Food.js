const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router
  .get("/admin", async (req,res,next)=>{
    try {
      const foodData = await Food.findAll();
      // console.log('food',foodData);
      res.status(201).send(foodData)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .post("/admin" ,async (req,res,next)=>{
    try {
      console.log(req.body);
      await Food.create()

      res.status(201).end();
    } catch (error) {
      console.log('실패');
    }
  })
  .patch("/admin",async (req,res,next)=>{
    try {
      console.log("진입");
      console.log(req.body);
      res.status(201).end()
    } catch (error) {
      console.log("실패");
    }
  })
  .delete("/admin",async (req,res,next)=>{
    try {
      console.log("진입");
      console.log(req.body);
      res.status(201).end()
    } catch (error) {
      console.log("실패");
    }
  })


module.exports = router;