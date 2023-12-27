const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();

router
  .post('/register',(req,res,next)=>{
    console.log(req.body);
    Admin.create({
      email: req.body.email,
      password: req.body.pwd,
      name: req.body.name,
      contact_number: req.body.phone,
    })
    .then(()=>{
      res.status(201).end();
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).end();
    })
  })

  .get('/login',async (req,res,next)=>{
    try {
      console.log('test',req.query);
      const email = req.query.email;
      const pwd = req.query.password;
      console.log(email,pwd);
      const Ck_pwd = await Admin.findOne({//selete * from Admin
        where:{email: email} //wheere id=id
      })
       
      console.log('test',Ck_pwd.password); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
      if (Ck_pwd === null) {
        //Ck_pwd = null 은 db에서 아이디로 조회한 값이 없다는 것
        return res.status(400).send("아이디또는 비밀번호를 확인해주세요");
      }else{
        if (pwd == Ck_pwd.password) {
          console.log(Ck_pwd);
          return res.status(201).send(Ck_pwd);
        }else{
          return res.status(400).end();
        }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).end();
    }
  })
  
  .get('/mypage',async(req,res,next)=>{
    console.log(req.query);
   await Admin.findOne({//selete * from Admin
      where:{id: req.query.id} //wheere id=id
    }).then((result)=>{
      res.status(201).send(result)
    })
  })

  .get('/nomal',(req,res,next)=>{
    Admin.findAll({where:{role:0}})
    .then((result)=>{
      res.status(201).send(result)
    })
  })
  .get('/oner',(req,res,next)=>{
    Admin.findAll({where:{role:1}})
    .then((result)=>{
      res.status(201).send(result)
    })
  })
  .patch('/admin/0',(req,res,next)=>{
    
  })
  .patch('/admin/1',(req,res,next)=>{
    console.log(req.body);
    Admin.update({
      name:req.body.Nname,
      email:req.body.Nemail,
      password:req.body.Npwd,
      contact_number:req.body.Nphone,
      role:req.body.Nrole,
      updated_at:new Date()
    },{
      where:{id:req.body.id}
    })
    res.status(201).end();
  })

  .get('/findId',(req,res,next)=>{
    console.log(req.query);
    Admin.findOne({where:{name:req.query.name,contact_number:req.query.contact_number}})
    .then((result)=>{
      console.log(result);
      res.status(201).send(result)
    })
    .catch((err)=>{
      console.error(err);
      res.status(501).end();
    })
  })
  .get('/findPW',(req,res,next)=>{
    console.log(req.query);
    Admin.findOne({where:{email:req.query.email,name:req.query.name,contact_number:req.query.contact_number}})
    .then((result)=>{
      console.log(result);
      res.status(201).send(result)
    })
    .catch((err)=>{
      console.error(err);
      res.status(501).end();
    })
  })

module.exports = router;