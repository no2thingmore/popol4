const express = require('express');
const Ingredient = require('../models/ingredient');

const router = express.Router();

router
.get("/", async (req,res,next)=>{
  try {
    const ingredientData = await Ingredient.findAll();
    // console.log('food',foodData);
    res.status(201).send(ingredientData)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

.get('/admin', (req,res,next)=>{
  Ingredient.findAll()
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch((err)=>{
    res.status(500).send(err)
  })
})
.post('/admin',(req,res,next)=>{
  console.log(req.body);
  try {
    Ingredient.create({
      kname: req.body.kname,
      ename: req.body.ename,
      kinds: req.body.kinds,
      comment: req.body.comment,
      image_url: req.body.image_url,
      add_price: req.body.price,
      ingred_kcal: req.body.kcal,
      admin_id: req.body.admin_id,
      created_at:new Date(),
      updated_at:new Date(),
    })
    res.status(201).end();
  } catch (error) {
    
  }
})
.patch('/admin',async(req,res,next)=>{
  try {
    const data = await Ingredient.findOne({where:{id:req.body.id}})
    const kname= req.body.kname || data.kname
    const ename= req.body.ename || data.ename
    const kinds= req.body.kinds || data.kinds
    const comment= req.body.comment || data.comment
    const image_url= req.body.image_url || data.image_url
    const add_price= req.body.price || data.price
    const ingred_kcal= req.body.kcal || data.kcal
    const admin_id= req.body.admin_id || data.admin_id

    await Ingredient.update({
      kname: kname,
      ename: ename,
      kinds: kinds,
      comment: comment,
      image_url: image_url,
      add_price: add_price,
      ingred_kcal: ingred_kcal,
      admin_id: admin_id,
      updated_at:new Date(),
    },{
      where:{id:req.body.id}
    }).then(()=>{
      res.status(201).end();
    })
  } catch (error) {
    console.log(error);
    res.status(501).end();
  }
})
.delete('/admin',(req,res,next)=>{
  Ingredient.destroy({where:{id:req.body.id}})
  .then(()=>{
    res.status(201).end();
  })
})
.get('/ingreDient', (req,res,next)=>{
    Ingredient.findAll()
    .then((result)=>{
      res.status(201).send(result)
    })
    .catch((err)=>{
      res.status(500).send(err)
    })

})
module.exports = router;