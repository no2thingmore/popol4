const express = require('express');
const Inquiry = require('../models/inquiry');
const router = express.Router();

router
.get('/',(req,res,next)=>{
  Inquiry.findAll()
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
    const data = await Board.findOne({where:{id:req.body.id}})
    const editKinds = req.body.kinds || data.kinds;
    const editTags = req.body.tags || data.tags;
    const editTitle = req.body.title || data.title;
    const editContent = req.body.content || data.content;
    const editComment = req.body.comment || data.comment;
    const editStatus = req.body.status || data.status;
    const editAdmin_id = req.body.admin_id || data.admin_id;
    const editUser_id = req.body.user_id || data.user_id;
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
    {where:{id:req.body.id}});
    res.status(201).end();
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