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
app.use('/board',BoardRouter)
app.use('/inquiry',InquiryRouter)

// const Food = require('./models/food.js');
// const Ingredient = require('./models/ingredient.js')
// const Event = require('./models/event.js');
const { title } = require('process');
const Board = require('./models/board.js');
const Inquiry = require('./models/inquiry.js');
const list = [
  {
      "admin_id":1,
      "kinds":0,
      "tags":2,
      "title":"결제 오류 문의드려요",
      "content":"결제도중 오류가 떳어요 어떻게 해야할까요",
      "add_file":"event_2023_super_pop.png",
      "status":0,
      "create_at":"2014-11-22 5:01"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":4,
      "title":"배송이 늦게되네요",
      "content":"주문한 물건이 늦게오네요 어디까지 배달됫나요",
      "add_file":"event_caddo_summer_slipper_beach pack.png",
      "status":1,
      "create_at":"1981-11-29 1:49"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":2,
      "title":"환불하고싶어요",
      "content":"단순변심으로 물건을 사고싶지 않아졋어요",
      "add_file":"event_cha_eunwoo_menu_promotion.png",
      "status":1,
      "create_at":"1971-10-23 1:17"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":4,
      "title":"제품 교환이 되나요",
      "content":"받은 물건이 마음에 들지않아서 교환하고싶은데 어떻게 해야하나요",
      "add_file":"event_chicken_collection.png",
      "status":1,
      "create_at":"2015-05-28 15:23"
  },
  {
      "admin_id":1,
      "kinds":0,
      "tags":3,
      "title":"포인트 적립이 안됫어요",
      "content":"최근에 구매한 물건에 대한 포인트가 적립이 안됫어요 확인해주세요",
      "add_file":"event_eat_fresh_feel_good.png",
      "status":0,
      "create_at":"2004-08-18 6:51"
  },
  {
      "admin_id":1,
      "kinds":0,
      "tags":2,
      "title":"회원가입이 되질 않아요",
      "content":"회원가입을 했는데 오류가 떳어요 이거 어떻게 하나요",
      "add_file":"event_lobster_collection.png",
      "status":0,
      "create_at":"1973-10-30 7:22"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":3,
      "title":"주문 취소할래요",
      "content":"실수로 잘못 주문했어요 취소해줘요",
      "add_file":"event_mon_surprise.png",
      "status":0,
      "create_at":"1970-03-22 11:40"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":1,
      "title":"이거 어떻게 써요",
      "content":"물건이 도착했는데 동작을 안하네요 어떻게 써요",
      "add_file":"event_new_shrimp_series.png",
      "status":0,
      "create_at":"1998-02-04 10:48"
  },
  {
      "admin_id":1,
      "kinds":0,
      "tags":1,
      "title":"물건이 불량으로 왔어요",
      "content":"배송된 물건이 불량인데 어떻게 조치해주실 건가요",
      "add_file":"event_order_by_hand.png",
      "status":1,
      "create_at":"1970-05-23 13:18"
  },
  {
      "admin_id":1,
      "kinds":1,
      "tags":4,
      "title":"계정 로그인이 안된대요",
      "content":"로그인이 안되는데 어떻게 해결하나요",
      "add_file":"event_spicy_series.png",
      "status":1,
      "create_at":"2011-03-16 19:25"
  }
]

app.get('/test',async ()=>{
  for (let i = 0; i < list.length; i++) {
    const elements = list[i];
    Inquiry.create({
      admin_id:elements.admin_id,
      tags: elements.tags,
      kinds: elements.kinds,
      create_at: elements.create_at,
      title: elements.title,
      content: elements.content,
      add_file: elements.add_file,
      status: elements.status
    })
  }
}) //데이터 저장용 axios 

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
