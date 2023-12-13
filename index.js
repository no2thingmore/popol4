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

app.use(cors());

const upload = multer({ 
  storage: multer.diskStorage({ //저장 설정
      destination: function(req, file, cb) { // 어디에 저장할거냐? upload/
          cb(null, 'upload/') // upload폴더 밑에
      },
      filename: function(req, file, cb){ // 어떤 이름으로 저장할거야?
          cb(null, file.originalname) // 업로드한 file의 오리지널 이름으로 저장하겠다.
      }
  })
})

app.post('/image', upload.single('image'), (req, res)=>{ 
  const file = req.file; 
  console.log("post(/image) file:",file);
  res.send({ 
      imageUrl: "http://168.126.242.77:8080/"+file.destination+file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

app.use('/food', FoodRouter)

// const Food = require('./models/food.js');
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









