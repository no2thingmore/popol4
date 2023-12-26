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

.get('/news',(req,res,next)=>{
  Board.findOne({where:{id:req.query.id}})
  .then((result)=>{
    res.status(201).send(result);
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})

.post('/admin',(req,res,next)=>{
  console.log(req.body);
  Board.create({
    admin_id:req.body.admin_id,
    image_url:req.body.image_url,
    title:req.body.title,
    content:req.body.content,
    created_at:new Date(),
    updated_at:new Date(),
  })
  .then(()=>{
    res.status(201).end();
  })
  .catch(()=>{
    res.status(501).end();
  })
})

.patch("/admin",async (req,res,next)=>{
  try {
    const data = await Board.findOne({where:{id:req.body.id}})
    const editFile = req.body.image_url || data.image_url;
    const editTitle = req.body.title || data.title;
    const editContent = req.body.content || data.content;
    const editAdmin_id = req.body.admin_id || data.admin_id;
    const update_at = new Date();

    await Board.update({
      admin_id:editAdmin_id,
      image_url:editFile,
      title:editTitle,
      content:editContent,
      update_at:update_at
    },
    {where:{id:req.body.id}})
    .then(()=>{
      res.status(201).send("success")
    })
    .catch(()=>{
      res.status(501).send("fail")
    })
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
  }
})
module.exports = router