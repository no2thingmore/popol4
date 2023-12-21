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
  
    res.status(201).send()
  }
)

module.exports = router;