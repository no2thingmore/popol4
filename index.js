const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const { sequelize } = require('./models');

const FoodRouter = require('./routes/Food.js')
const IngredientRouter = require('./routes/Ingredient.js')
const UserRouter = require('./routes/User.js')


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
      imageUrl: file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

app.use('/food', FoodRouter)
app.use('/ingredient', IngredientRouter)
app.use('/user', UserRouter)

const Food = require('./models/food.js');
const Ingredient = require('./models/ingredient.js')
const Event = require('./models/event.js');
const { title } = require('process');
const list = [
  {
      admin_id:1,
      title: "랍스터 컬렉션",
      content: "신선한 리얼 랍스터가 그대로! 올겨울 한정판으로 더욱 특별하게 준비한 써브웨이 랍스터 컬렉션",
      image_url: "event_lobster_collection.png",
      status: 0
  },
  {
      admin_id:1,
      title: "써브웨이 오늘의 수프",
      content: "오늘의 수프를 원하는 사이즈로! 샌드위치랑 함께 먹으면 든든하고 맛있썹!",
      image_url: "event_subway_today_soup.png",
      status: 0
  },
  {
      admin_id:1,
      title: "Eat Fresh Fell Good",
      content: "써브웨이 X 차은우 신선함 가득! 즐거움 가득! 함께하는 이 순간이 즐거워!",
      image_url: "event_eat_fresh_feel_good.png",
      status: 0
  },
  {
      admin_id:1,
      title: "말이 안 나올 땐 손으로 주문하자!",
      content: "말이 안 나올 땐? 손으로 주문하자!",
      image_url: "event_order_by_hand.png",
      status: 0
  },
  {
      admin_id:1,
      title: "스파이시 시리즈",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_spicy_series.png",
      status: 1
  },
  {
      admin_id:1,
      title: "2023 슈퍼팝 프로모션",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_2023_super_pop.png",
      status: 1
  },
  {
      admin_id:1,
      title: "차은우 메뉴 프로모션",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_cha_eunwoo_menu_promotion.png",
      status: 1
  },
  {
      admin_id:1,
      title: "카도 썸머 슬리퍼 & 비치팩",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_caddo_summer_slipper_beach pack.png",
      status: 1
  },
  {
      admin_id:1,
      title: "New 쉬림프 시리즈",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_new_shrimp_series.png",
      status: 1
  },
  {
      admin_id:1,
      title: "WaterBomB! Seoul",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_waterbomb_seoul.png",
      status: 1
  },
  {
      admin_id:1,
      title: "트러플 마요 시리즈",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_truffle_mayo_series.png",
      status: 1
  },
  {
      admin_id:1,
      title: "이달의 썹!프라이즈",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_mon_surprise.png",
      status: 1
  },
  {
      admin_id:1,
      title: "치킨 컬렉션",
      content: "이벤트가 종료되었습니다.",
      image_url: "event_chicken_collection.png",
      status: 1
  }
]

app.get('/test',async ()=>{
  for (let i = 0; i < list.length; i++) {
    const elements = list[i];
    Event.create({
      admin_id:elements.admin_id,
      title: elements.title,
      content: elements.content,
      image_url: elements.image_url,
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









