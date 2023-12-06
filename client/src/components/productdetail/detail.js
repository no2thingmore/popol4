import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail.css";
import img from "./../menuintro/breakfast/sandwich.png";
import DetailContent from "./detailcontent";
import Potassium from "./potassium";
import Threerool from './threerool';

function Detail() {
  const { product } = useParams(); //kinds으로
  const { id } = useParams(); //그대로
  const [isSticky, setIsSticky] = useState(false);
  const [menu, setMenu] = useState(product);

  const menuItems = [
    { id: "sandwich", text: "샌드위치" },
    { id: "wrap", text: "랩ㆍ기타" },
    { id: "salad", text: "샐러드" },
    { id: "breakfast", text: "아침메뉴" },
    { id: "smile", text: "스마일 썹" },
    { id: "group", text: "단체주문" },
  ];

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky((prevIsSticky) => (offset > 200 ? true : false));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [data, setData] = useState([
    {
      id: 1,
      Kname: "그룹 스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      중량: 256,
      단백질: 25.2,
      포화지방: 7.4,
      당류: 15.0,
      나트륨: 903,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
  ]);
  return (
    <div>
      <div
        className={`CHM_headerMenutab2${isSticky ? " sticky" : ""}`}
        style={{ top: isSticky ? 0 : "unset" }}
      >
        {menuItems.map((menuItem) => (
          <a
            href={`/menuIntro/${menuItem.id}`}
            key={menuItem.id}
            style={isSticky ? { color: "black" } : {}}
          >
            <div
              onClick={() => handleMenuClick(menuItem.id)}
              style={
                menu === menuItem.id
                  ? isSticky
                    ? { borderBottom: "0.2vw solid black" }
                    : { borderBottom: "0.2vw solid black", color: "black" }
                  : { color: "black" }
              }
            >
              {menuItem.text}
            </div>
          </a>
        ))}
      </div>
      <DetailContent data={data} id={id} product={product}></DetailContent>
      <Potassium data={data}></Potassium>
      <Threerool></Threerool>
    </div>
  );
}

export default Detail;
