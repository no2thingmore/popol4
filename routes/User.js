const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
  .post('/register',(req,res,next)=>{
    console.log(req.body);
    User.create({
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
      // console.log('test',req.body.id);
      const email = req.query.email;
      const pwd = req.query.password;
      const Ck_pwd = await User.findOne({//selete * from User
        where:{email: email} //wheere id=id
      })
       
      // console.log('test',Ck_pwd.pwd); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
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
   await User.findOne({//selete * from User
      where:{id: req.query.id} //wheere id=id
    }).then((result)=>{
      res.status(201).send(result)
    })
  })

  .get('/admin',(req,res,next)=>{

  })
  .patch('/admin/nomal',()=>{

  })
  .patch('/admin/oner',()=>{

  })
  .patch('/admin/admin',()=>{

  })


module.exports = router;