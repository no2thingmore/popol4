const express = require('express');
const Event = require('../models/event');
const router = express.Router();

router
.get('/',(req,res,next)=>{
  Event.findAll()
  .then((response)=>{
    console.log(response);
    res.status(201).send(response)
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})

module.exports = router;