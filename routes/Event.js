const express = require('express');
const Event = require('../models/event');

const router = express.Router();

router
.get('/', (req, res, next) => {
  Event.findAll()
  .then((result)=>{
    res.status(201).send(result);
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})
.delete("/admin",async (req,res,next)=>{
  try {
    console.log(req.query);
    await Event.destroy({where:{id:req.query.id}})
    .then(()=>{
      res.status(201).end()
    })
    .catch((err)=>{
      console.log(err);
    })
  } catch (error) {
    console.log(error);
    res.status(501).end()
  }
})
.get('/update', async(req,res,next)=>{
  try {
    const foodData = await Event.findOne({where:{id:req.query.id}});
    // console.log('food',foodData);
    res.status(201).send(foodData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.post('/admin',(req,res,next)=>{
  Event.create({
    admin_id:req.body.admin_id,
    title:req.body.title,
    content:req.body.content,
    image_url:req.body.image_url,
    status:req.body.status,
    created_at:new Date(),
    updated_at:new Date(),
  }).then(()=>{
    res.status(201).end()
  })
})

router
.patch('/admin', async (req, res, next) => {
  try {
    // console.log(req.body)
    const data = await Event.findOne({where:{id:req.body.id}})
    console.log("find", data);

    const editAdmin_id = req.body.admin_id || data.admin_id;
    const editTitle = req.body.title || data.title;
    const editContent = req.body.content || data.content;
    const editFile = req.body.image_url || data.image_url;
    const editStatus = req.body.status || data.status;

    console.log("edit", editContent);
    await Event.update({
      admin_id:editAdmin_id,
      title:editTitle,
      content:editContent,
      image_url:editFile,
      status:editStatus
    },
    {where:{id:req.body.id}})
    .then(() => {
      res.status(201).send("success");
    })
    .catch((err) => {
      res.status(500).send("fail");
    })
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});



module.exports = router;