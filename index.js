const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const { sequelize } = require('./models');
const FoodRouter = require('./routes/Food.js')


const port = process.env.NODE_ENV || '8080';
const multer = require('multer');

app.set('view engine', 'html');

app.use(express.json());

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

app.use("/upload", express.static("upload"));

var cors = require('cors');
const Food = require('./models/food.js');
app.use(cors());

app.use('/food', FoodRouter)

// const list = []

// app.get('/test',async ()=>{
//   for (let i = 0; i < list.length; i++) {
//     const elements = list[i];
//     Food.create({
//     admin_id:elements.admin_id,
//     kname:elements.kname,
//     ename:elements.ename,
//     image_url:elements.image_url,
//     coment:elements.coment,
//     ingred_gram:elements.ingred_gram,
//     ingred_kcal:elements.ingred_kcal,
//     ingred_protein:elements.ingred_protein,
//     ingred_fat:elements.ingred_fat,
//     ingred_sugars:elements.ingred_sugars,
//     ingred_salt:elements.ingred_salt,
//     price: elements.price,
//     tags: elements.tags,
//     kinds: elements.kinds,
//     status: elements.status
//     })
//   }
// }) //데이터 저장용 axios 

sequelize.sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, function () {
  console.log(`${port}에서 대기중`)
}); 









