const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const { sequelize } = require('./models');

const FoodRouter = require('./routes/Food.js')
const IngredientRouter = require('./routes/Ingredient.js')
const UserRouter = require('./routes/User.js')
const BoardRouter = require('./routes/Board.js')
const InquiryRouter = require('./routes/Inquiry.js')
const EventRouter = require('./routes/Event.js')

const port = process.env.NODE_ENV || 8080;
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
      imageUrl: file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

app.use('/food', FoodRouter);
app.use('/ingredient', IngredientRouter);
app.use('/user', UserRouter);
app.use('/board',BoardRouter);
app.use('/inquiry',InquiryRouter);
app.use("/event", EventRouter);

// const Food = require('./models/food.js');
// const Ingredient = require('./models/ingredient.js')
// const Event = require('./models/event.js');
// const Board = require('./models/board.js');
// const Inquiry = require('./models/inquiry.js');
// const list = 

// app.get('/test',async ()=>{
//   for (let i = 0; i < list.length; i++) {
//     const elements = list[i];
//     Inquiry.create({
//       admin_id:elements.admin_id,
//       tags: elements.tags,
//       kinds: elements.kinds,
//       create_at: elements.create_at,
//       title: elements.title,
//       content: elements.content,
//       add_file: elements.add_file,
//       status: elements.status
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
