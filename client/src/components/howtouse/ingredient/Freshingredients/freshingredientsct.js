import { useEffect, useState } from "react";
import { API_URL } from "../../../config/contansts";
import axios from "axios";

import { Link } from 'react-router-dom';

function Freshingredientsct() {
  const [data, setData] = useState([
    
  ]);

  useEffect(() => {
    axios
      .get(`${API_URL}/ingredient/ingreDient`)
      .then((res) => {
        console.log("db조회 완료");
        console.log("bbang",res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

  const [select, setSelect] = useState("All");
  const categories = ["All", "빵", "야채", "치즈", "소스"];

  const handleCategoryClick = (category) => {
    setSelect(category);
  };

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      setTimeout(() => {
        setEnd("end");
      }, 400);

      return () => {
        setEnd("end2");
      };
    } else {
      setIsInitialLoad(false);
    }
  }, [select, isInitialLoad]);

  return (
    <div style={{position: "relative"}}>
      <div className="CHM_subSelectbar">
        <div className="CHM_saladSubSelectList1">
        {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={select === category ? { color: "#009223" } : {}}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="CHM_selectcontent">
        <div className="CHM_selectcontentGridBox">
          {data.map((a, i) => {
            return (
              <div className={"CHM_selectCard start " + end}>
                {/* <Link to={`/ingreDients/freshingredients/${a.id}`}> */}
                  <div className="CHM_selectBakcCard">
                    <div>
                      <div className="CHM_selectBackCardKname">{a.kname}</div>
                      <div className="CHM_selectBackCardEname">{a.ename}</div>
                      <div className="CHM_selectBackCardContent">
                        {a.comment}
                      </div>
                    </div>
                    <div className="CHM_selectBackCardIcon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                {/* </Link> */}

                <div className="CHM_selectCardImg">
                  <img src={API_URL+"/upload/"+a.image_url} width="100%"></img>
                </div>
                <div className="CHM_selectCardKname">{a.kname}</div>
                <div className="CHM_selectCardEname">{a.ename}</div>
                <div className="CHM_selectCardkcal">{a.kcal} kcal</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Freshingredientsct;


// import id1 from "../../image/bread/honeyoat.jpg";
// import id2 from "../../image/bread/heartyitalian.jpg";
// import id3 from "../../image/bread/wheat.jpg";
// import id4 from "../../image/bread/parmesanoregano.jpg";
// import id5 from "../../image/bread/white.jpg";
// import id6 from "../../image/bread/flatbread.jpg";

// import id7 from "../../image/vegetable/lettuce.jpg";
// import id8 from "../../image/vegetable/tomatoes.jpg";
// import id9 from "../../image/vegetable/cucumbers.jpg";
// import id10 from "../../image/vegetable/peppers.jpg";
// import id11 from "../../image/vegetable/redOnions.jpg";
// import id12 from "../../image/vegetable/pickles.jpg";
// import id13 from "../../image/vegetable/olives.jpg";
// import id14 from "../../image/vegetable/jalapenos.jpg";
// import id15 from "../../image/vegetable/avocado.jpg";

// import id16 from "../../image/cheese/americancheese.jpg";
// import id17 from "../../image/cheese/mozzarellacheese.jpg";
// import id18 from "../../image/cheese/shreddedcheese.jpg";

// import id19 from "../../image/sauce/ranch.jpg";
// import id20 from "../../image/sauce/sweetonion.jpg";
// import id21 from "../../image/sauce/mayonnaise.jpg";
// import id22 from "../../image/sauce/sweetchilli.jpg";
// import id23 from "../../image/sauce/smokebbq.jpg";
// import id24 from "../../image/sauce/hotchilli.jpg";
// import id25 from "../../image/sauce/honeymustard.jpg";
// import id26 from "../../image/sauce/southwestchipotle.jpg";
// import id27 from "../../image/sauce/horseradish.jpg";
// import id28 from "../../image/sauce/yellowmustard.jpg";
// import id29 from "../../image/sauce/oliveoil.jpg";
// import id30 from "../../image/sauce/redwinevinaigrette.jpg";
// import id31 from "../../image/sauce/salt.jpg";
// import id32 from "../../image/sauce/blackpepper.jpg";



// {
//   id: 1,
//   Kname: "허니오트",
//   Ename: "Honey Oat",
//   kcal: 235,
//   img: id1,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로 (허니오트의 칼로리는 15cm 기준입니다.)",
// },
// {
//   id: 2,
//   Kname: "하티",
//   Ename: "Hearty Italian",
//   kcal: 210,
//   img: id2,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "부드러운 화이트빵에 옥수수가루를 묻혀 겉은 바삭하고 고소하며 속은 부드럽게 (하티의 칼로리는 15cm 기준입니다.)",
// },
// {
//   id: 3,
//   Kname: "위트",
//   Ename: "Wheat",
//   kcal: 192,
//   img: id3,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "여러 가지 곡물로 만들어 건강하고 고소한 맛의 곡물빵 (위트의 칼로리는 15cm 기준입니다.)",
// },
// {
//   id: 4,
//   Kname: "파마산 오레가노",
//   Ename: "Parmesan Oregano",
//   kcal: 213,
//   img: id4,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "부드러운 화이트빵에 파마산 오레가노 시즈닝을 묻혀 허브향 가득 (파마산 오레가노의 칼로리는 15cm 기준입니다.)",
// },
// {
//   id: 5,
//   Kname: "화이트",
//   Ename: "White",
//   kcal: 202,
//   img: id5,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "가장 클래식한 빵으로 부드러운 식감이 매력 포인트 (화이트의 칼로리는 15cm 기준입니다.)",
// },
// {
//   id: 6,
//   Kname: "플랫브레드",
//   Ename: "Flat Bread",
//   kcal: 467,
//   img: id6,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:
//     "이름처럼 납작 모양에 피자도우처럼 쫀득한 맛이 일품 (플랫브레드의 칼로리는 30cm 기준입니다.)",
// },
// {
//   id: 7,
//   Kname: "양상추",
//   Ename: "Lettuce",
//   kcal: 2.9,
//   img: id7,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 8,
//   Kname: "토마토",
//   Ename: "Tomatoes",
//   kcal: 7.7,
//   img: id8,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 9,
//   Kname: "오이",
//   Ename: "Cucumbers",
//   kcal: 1.5,
//   img: id9,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 10,
//   Kname: "피망",
//   Ename: "Peppers",
//   kcal: 1.4,
//   img: id10,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },

// {
//   id: 11,
//   Kname: "양파",
//   Ename: "Red Onions",
//   kcal: 2.8,
//   img: id11,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 12,
//   Kname: "피클",
//   Ename: "Pickles",
//   kcal: 0.4,
//   img: id12,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 13,
//   Kname: "올리브",
//   Ename: "Olives",
//   kcal: 3.9,
//   img: id13,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 14,
//   Kname: "할라피뇨",
//   Ename: "Jalapenos",
//   kcal: 0.6,
//   img: id14,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 15,
//   Kname: "아보카도",
//   Ename: "Avocado",
//   kcal: 56.5,
//   img: id15,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 16,
//   Kname: "아메리칸 치즈",
//   Ename: "American Cheese",
//   kcal: 35.3,
//   img: id16,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 17,
//   Kname: "슈레드 치즈",
//   Ename: "Shredded Cheese",
//   kcal: 53.6,
//   img: id17,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 18,
//   Kname: "모차렐라 치즈",
//   Ename: "Mozzarella Cheese",
//   kcal: 43.8,
//   img: id18,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 19,
//   Kname: "랜치",
//   Ename: "Ranch",
//   kcal: 116,
//   img: id19,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"고소한 마요네즈와 레몬즙의 만남! 고소함이 두배!"
// },
// {
//   id: 20,
//   Kname: "스위트 어니언",
//   Ename: "Sweet Onion",
//   kcal: 40.1,
//   img: id20,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"써브웨이만의 특제 레시피로 만든 달콤한 양파소스"
// },
// {
//   id: 21,
//   Kname: "마요네즈",
//   Ename: "Mayonnaise",
//   kcal: 158,
//   img: id21,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"말이 필요없는 고소함의 대명사, 마요네즈 소스"
// },
// {
//   id: 22,
//   Kname: "스위트 칠리",
//   Ename: "Sweet Chilli",
//   kcal: 40,
//   img: id22,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"매콤한 칠리에 더해진 기분 좋은 달콤함!"
// },
// {
//   id: 23,
//   Kname: "스모키 바베큐",
//   Ename: "Smoke BBQ",
//   kcal: 32.8,
//   img: id23,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"스모크 향과 달콤한 바비큐의 완벽한 조화"
// },
// {
//   id: 24,
//   Kname: "핫 칠리",
//   Ename: "Hot Chilli",
//   kcal: 41.8,
//   img: id24,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"진짜 매운맛을 보고 싶다면? 써브웨이의 핫 칠리!"
// },
// {
//   id: 25,
//   Kname: "허니 머스터드",
//   Ename: "Honey Mustard",
//   kcal: 38.4,
//   img: id25,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"겨자씨가 아낌없이 들어간 달콤한 머스터드 소스"
// },
// {
//   id: 26,
//   Kname: "사우스웨스트 치폴레",
//   Ename: "Southwest Chipotle",
//   kcal: 96.5,
//   img: id26,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"핫 칠리와 고소한 마요네즈가 만난 이국적인 매콤한 맛"
// },
// {
//   id: 27,
//   Kname: "홀스래디쉬",
//   Ename: "Horseradish",
//   kcal: 106,
//   img: id27,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스"
// },
// {
//   id: 28,
//   Kname: "머스타드",
//   Ename: "Yellow Mustard",
//   kcal: 15.3,
//   img: id28,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"겨자씨로 만든 오리지날 머스터드 소스"
// },
// {
//   id: 29,
//   Kname: "올리브 오일",
//   Ename: "Olive Oil",
//   kcal: 124,
//   img: id29,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스"
// },
// {
//   id: 30,
//   Kname: "레드 와인 식초",
//   Ename: "Red Wine Vinaigrette",
//   kcal: 0.7,
//   img: id30,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:"레드와인을 발효시켜 풍미가 가득한 식초"
// },
// {
//   id: 31,
//   Kname: "소금",
//   Ename: "Salt",
//   kcal:  "",
//   img: id31,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },
// {
//   id: 32,
//   Kname: "후추",
//   Ename: "Black Pepper",
//   kcal: 106,
//   img: id32,
//   type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
//   content:""
// },