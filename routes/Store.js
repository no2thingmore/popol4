const express = require('express');
const Store = require('../models/store');
const router = express.Router();

router
  .get('/',(req,res,next)=>{
    Store.findAll()
    .then((response)=>{
      console.log(response);
      res.status(201).send(response)
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).end();
    })
  })

  .post('/admin',(req,res,next)=>{
    try {
      Store.create({
        name:req.body.name,
        address:req.body.name,
        phone:req.body.name,
        oner:req.body.name,
        status:req.body.status,
        created_at:new Date(),
        updated_at:new Date(),
      })
      res.status(201).send();
    } catch (error) {
      console.log(error);
      res.status(501).end();
    }
  }
)

module.exports = router;