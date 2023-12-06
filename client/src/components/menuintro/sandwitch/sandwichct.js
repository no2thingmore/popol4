import { useEffect, useState } from "react";
import img from "./sandwich.png";
import { Link } from 'react-router-dom';

function Sandwitchct() {
  const [data, setData] = useState([
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 2,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 3,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },

    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
  ]);

  const [select, setSelect] = useState("All");
  const categories = ["All", "클래식", "플레쉬&라이트", "프리미엄", "신제품", "추가 선택"];

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
    <div style={{ position: "relative" }}>
      <div className="CHM_subSelectbar">
        <div className="CHM_sandwichSubSelectList">
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
          {data.map((item) => (
            <div key={item.id} className={"CHM_selectCard start " + end}>
              <Link to={`/menuIntro/sandwich/${item.id}`}>
                <div className="CHM_selectBakcCard">
                  <div>
                    <div className="CHM_selectBackCardKname">{item.Kname}</div>
                    <div className="CHM_selectBackCardEname">{item.Ename}</div>
                    <div className="CHM_selectBackCardContent">{item.content}</div>
                  </div>
                  <div className="CHM_selectBackCardIcon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </Link>
              <div className="CHM_selectCardImg">
                <img src={item.img} width="100%" alt={item.Kname}></img>
              </div>
              <div className="CHM_selectCardKname">{item.Kname}</div>
              <div className="CHM_selectCardEname">{item.Ename}</div>
              <div className="CHM_selectCardkcal">{item.kcal} kcal</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sandwitchct;
