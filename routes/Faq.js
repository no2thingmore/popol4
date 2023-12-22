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
    Faq.create({
      admin_id:req.body.admin_id || null,
      kinds:req.body.kinds,
      tags:req.body.tags,
      title:req.body.title,
      content:req.body.content || null,
      add_file:req.body.add_file || null,
      created_at:new Date(),
      updated_at:new Date(),
    })
    res.status(201).end()
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.patch('/admin', async(req,res,next)=>{
  try {
    const data = await Faq.findOne({where:{id:req.body.id}});
    const admin_id = req.body.admin_id || data.admin_id;
    const kinds = req.body.kinds || data.kinds;
    const tags = req.body.tags || data.tags;
    const title = req.body.title || data.title;
    const content = req.body.content || data.content;
    const add_file = req.body.add_file || data.add_file;
    await Faq.update({
      admin_id:admin_id,
      kinds:kinds,
      tags:tags,
      title:title,
      content:content,
      add_file:add_file,
      updated_at:new Date(),
    },
    {where:{id:req.body.id}});
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(501).end();
  }

})
module.exports = router;