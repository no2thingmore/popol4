import React, { useState } from "react";
import "./product.css";
import Search from "./search";
import Result from "./result";
import img from "./sandwich.png";

function Product() {
  const [selectedSalesStatus, setSelectedSalesStatus] = useState("false");
  const [categorySelect1, setCategorySelect1] = useState("false");
  const [categorySelect2, setCategorySelect2] = useState("false");
  const [startprice, setStartprice] = useState(0);
  const [endprice, setEndprice] = useState(0);
  const [searchcategory, setSearchcategory] = useState("상품명");
  const [search, setSearch] = useState("false");

  console.log("재고현황: ", selectedSalesStatus);
  console.log("첫번째 카테고리: ", categorySelect1);
  console.log("두번째 카테고리: ", categorySelect2);
  console.log("시작가격: ", startprice);
  console.log("끝가격: ", endprice);
  console.log("검색카테고리: ", searchcategory);
  console.log("검색창: ", search);

  const [data, setData] = useState([
    {
      id: 1,
      Kname: "허니오트",
      Ename: "Honey Oat",
      kcal: 235,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로 (허니오트의 칼로리는 15cm 기준입니다.)",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 2,
      Kname: "하티",
      Ename: "Hearty Italian",
      kcal: 210,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "부드러운 화이트빵에 옥수수가루를 묻혀 겉은 바삭하고 고소하며 속은 부드럽게 (하티의 칼로리는 15cm 기준입니다.)",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 3,
      Kname: "위트",
      Ename: "Wheat",
      kcal: 192,
      img: img,
      type: "샐러드",
      type2: "프리미엄", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "여러 가지 곡물로 만들어 건강하고 고소한 맛의 곡물빵 (위트의 칼로리는 15cm 기준입니다.)",
      status: "품절",
      price: getRandomPrice(),
    },

    {
      id: 4,
      Kname: "파마산 오레가노",
      Ename: "Parmesan Oregano",
      kcal: 213,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "부드러운 화이트빵에 파마산 오레가노 시즈닝을 묻혀 허브향 가득 (파마산 오레가노의 칼로리는 15cm 기준입니다.)",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 5,
      Kname: "화이트",
      Ename: "White",
      kcal: 202,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "가장 클래식한 빵으로 부드러운 식감이 매력 포인트 (화이트의 칼로리는 15cm 기준입니다.)",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 6,
      Kname: "플랫브레드",
      Ename: "Flat Bread",
      kcal: 467,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "이름처럼 납작 모양에 피자도우처럼 쫀득한 맛이 일품 (플랫브레드의 칼로리는 30cm 기준입니다.)",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 7,
      Kname: "양상추",
      Ename: "Lettuce",
      kcal: 2.9,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 8,
      Kname: "토마토",
      Ename: "Tomatoes",
      kcal: 7.7,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 9,
      Kname: "오이",
      Ename: "Cucumbers",
      kcal: 1.5,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 10,
      Kname: "피망",
      Ename: "Peppers",
      kcal: 1.4,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "단종",
      price: getRandomPrice(),
    },

    {
      id: 11,
      Kname: "양파",
      Ename: "Red Onions",
      kcal: 2.8,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 12,
      Kname: "피클",
      Ename: "Pickles",
      kcal: 0.4,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 13,
      Kname: "올리브",
      Ename: "Olives",
      kcal: 3.9,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 14,
      Kname: "할라피뇨",
      Ename: "Jalapenos",
      kcal: 0.6,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 15,
      Kname: "아보카도",
      Ename: "Avocado",
      kcal: 56.5,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 16,
      Kname: "아메리칸 치즈",
      Ename: "American Cheese",
      kcal: 35.3,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 17,
      Kname: "슈레드 치즈",
      Ename: "Shredded Cheese",
      kcal: 53.6,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 18,
      Kname: "모차렐라 치즈",
      Ename: "Mozzarella Cheese",
      kcal: 43.8,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 19,
      Kname: "랜치",
      Ename: "Ranch",
      kcal: 116,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "고소한 마요네즈와 레몬즙의 만남! 고소함이 두배!",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 20,
      Kname: "스위트 어니언",
      Ename: "Sweet Onion",
      kcal: 40.1,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "써브웨이만의 특제 레시피로 만든 달콤한 양파소스",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 21,
      Kname: "마요네즈",
      Ename: "Mayonnaise",
      kcal: 158,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "말이 필요없는 고소함의 대명사, 마요네즈 소스",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 22,
      Kname: "스위트 칠리",
      Ename: "Sweet Chilli",
      kcal: 40,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "매콤한 칠리에 더해진 기분 좋은 달콤함!",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 23,
      Kname: "스모키 바베큐",
      Ename: "Smoke BBQ",
      kcal: 32.8,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "스모크 향과 달콤한 바비큐의 완벽한 조화",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 24,
      Kname: "핫 칠리",
      Ename: "Hot Chilli",
      kcal: 41.8,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "진짜 매운맛을 보고 싶다면? 써브웨이의 핫 칠리!",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 25,
      Kname: "허니 머스터드",
      Ename: "Honey Mustard",
      kcal: 38.4,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "겨자씨가 아낌없이 들어간 달콤한 머스터드 소스",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 26,
      Kname: "사우스웨스트 치폴레",
      Ename: "Southwest Chipotle",
      kcal: 96.5,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "핫 칠리와 고소한 마요네즈가 만난 이국적인 매콤한 맛",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 27,
      Kname: "홀스래디쉬",
      Ename: "Horseradish",
      kcal: 106,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 28,
      Kname: "머스타드",
      Ename: "Yellow Mustard",
      kcal: 15.3,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "겨자씨로 만든 오리지날 머스터드 소스",
      status: "진열",
      price: getRandomPrice(),
    },
    {
      id: 29,
      Kname: "올리브 오일",
      Ename: "Olive Oil",
      kcal: 124,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스",
      status: "중지",
      price: getRandomPrice(),
    },
    {
      id: 30,
      Kname: "레드 와인 식초",
      Ename: "Red Wine Vinaigrette",
      kcal: 0.7,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "레드와인을 발효시켜 풍미가 가득한 식초",
      status: "단종",
      price: getRandomPrice(),
    },
    {
      id: 31,
      Kname: "소금",
      Ename: "Salt",
      kcal: "",
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "품절",
      price: getRandomPrice(),
    },
    {
      id: 32,
      Kname: "후추",
      Ename: "Black Pepper",
      kcal: 106,
      img: img,
      type: "샌드위치",
      type2: "클래식", //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content: "",
      status: "진열",
      price: getRandomPrice(),
    },
  ]);

  const searched = data.filter(
    (item) =>
      ((searchcategory === "상품명" && item.Kname.includes(search)) ||
      (searchcategory === "상품아이디" && item.id === parseInt(search, 10)) ||
      (searchcategory === "설명" && item.content.includes(search))) &&
      (item.type.includes(categorySelect1) &&
        item.type2.includes(categorySelect2)) &&
      item.status.includes(selectedSalesStatus) &&
      (startprice <= item.price && item.price <= endprice)
  );

  function getRandomPrice() {
    return Math.floor(Math.random() * 10001) + 10000;
  }
  return (
    <div className="CHM_adminProductPageBg">
      <Search
        categorySelect1={categorySelect1}
        setCategorySelect1={setCategorySelect1}
        categorySelect2={categorySelect2}
        setCategorySelect2={setCategorySelect2}
        selectedSalesStatus={selectedSalesStatus}
        setSelectedSalesStatus={setSelectedSalesStatus}
        startprice={startprice}
        setStartprice={setStartprice}
        endprice={endprice}
        setEndprice={setEndprice}
        searchcategory={searchcategory}
        setSearchcategory={setSearchcategory}
        search={search}
        setSearch={setSearch}
      ></Search>
      <Result searched={searched}></Result>
    </div>
  );
}

export default Product;
