const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router
  .get("/admin", async (req,res,next)=>{
    try {
      const foodData = await Food.findAll();
      // console.log('food',foodData);
      res.status(201).send(foodData)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })

  .post("/admin" , (req,res,next)=>{
    try {
      console.log('addFood',req.body);
      const result = Food.create({
        admin_id: 1,
        kname: req.body.kname,
        ename: req.body.ename,
        coment: req.body.coment,
        image_url:req.body.image_url,
        price: req.body.price,
        status: req.body.status,
        ingred_kcal: parseFloat(req.body.ingred_kcal),
        ingred_protein: parseFloat(req.body.ingred_protein),
        ingred_fat: parseFloat(req.body.ingred_fat),
        ingred_sugars: parseFloat(req.body.ingred_sugars),
        ingred_salt: parseFloat(req.body.ingred_salt),
        kinds: req.body.kinds,
        tags: req.body.tags,
        ingred_gram: req.body.ingred_gram
      }).then(()=>{
        console.log('데이터 등록');
      }).catch((err) => console.log(err));
      console.log(result);
      res.status(201).end();
    } catch (error) {
      console.log(error);
      res.status(500).end()
    }
  })

  .patch("/admin",async (req,res,next)=>{
    try {
      console.log("진입");
      console.log(req.body);
      await Food.update({
        kname: req.body.kname,
        ename: req.body.ename,
        coment: req.body.coment,   
        price: req.body.price,
        status: req.body.status,
        ingred_kcal: req.body.ingred_kcal,
        ingred_protein: req.body.ingred_protein,
        ingred_fat: req.body.ingred_fat,
        ingred_sugars: req.body.ingred_sugars,
        ingred_salt: req.body.ingred_salt,
        kinds: req.body.kinds,
        tags: req.body.tags,
        ingred_gram: req.body.ingred_gram
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
      await Food.destroy({where:{id:req.body.id[0]}})
      res.status(201).end()
    } catch (error) {
      console.log("실패");
    }
  })


module.exports = router;