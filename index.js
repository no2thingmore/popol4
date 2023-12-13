const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const { sequelize } = require('./models');
const FoodRouter = require('./routes/Food.js')

const index = path.join(__dirname, 'client/build/index.html')
const port = process.env.NODE_ENV || '8080';
const multer = require('multer');

app.set('view engine', 'html');

app.use(express.json());

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

var cors = require('cors');
app.use(cors());

app.use('/food', FoodRouter)

// app.get('/test',async ()=>{
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     .create({
      
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









