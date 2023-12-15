const express = require('express');
const Board = require('../models/board');
const router = express.Router();

router
.get('/',(req,res,next)=>{
  Board.findAll()
  .then((result)=>{
    res.status(201).send(result);
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})

.patch("/admin",async (req,res,next)=>{
  try {
    console.log("진입");
    await Board.update({

    },
    {where:{id:req.body.id}});
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

.delete("/admin",async (req,res,next)=>{
  try {
    console.log(req.body);
    await Board.destroy({where:{id:req.body.id}})
    res.status(201).end()
  } catch (error) {
    console.log("실패");
    console.log();
  }
})
module.exports = router