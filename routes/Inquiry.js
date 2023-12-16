const express = require('express');
const Inquiry = require('../models/inquiry');
const router = express.Router();

router
.get('/',(req,res,next)=>{
  Inquiry.findAll()
  .then((result)=>{
    console.log(result);
    res.status(201).send(result);
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})

.patch("/admin",async (req,res,next)=>{
  try {
    console.log(req.body);
    const data = await Inquiry.findOne({where:{id:req.body.id}})
    console.log("find",data);

    const editKinds = data.kinds || req.body.kinds;
    const editTags = data.tags || req.body.tags;
    const editTitle = data.title || req.body.title;
    const editContent = data.content || req.body.content;
    const editComment = data.comment || req.body.comment;
    const editStatus = data.status || req.body.status;
    const editAdmin_id = data.admin_id || req.body.admin_id;
    const editUser_id = data.user_id || req.body.user_id;

    console.log("edit",editComment);
    await Inquiry.update({
      admin_id:editAdmin_id,
      user_id:editUser_id,
      kinds:editKinds,
      tags:editTags,
      title:editTitle,
      content:editContent,
      comment:editComment,
      status:editStatus,
    },
    {where:{id:req.body.id}})
    .then(()=>{
      res.status(201).end();
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).end();
    })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

.delete("/admin",async (req,res,next)=>{
  try {
    console.log("진입");
    console.log(req.body);
    await Inquiry.destroy({where:{id:req.body.id}})
    res.status(201).end()
  } catch (error) {
    console.log("실패");
    console.log();
  }
})
module.exports = router