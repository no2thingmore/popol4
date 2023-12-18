import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail.css";
import img from "./../menuintro/breakfast/sandwich.png";
import DetailContent from "./detailcontent";
import Potassium from "./potassium";
import Threerool from './threerool';

function Detail() {
  const { product } = useParams();
  const { id } = useParams();
  const [isSticky, setIsSticky] = useState(false);
  const [menu, setMenu] = useState(product);

  const menuItems = [
    { id: 0, text: "샌드위치" },
    { id: 1, text: "랩ㆍ기타" },
    { id: 2, text: "샐러드" },
    { id: 3, text: "아침메뉴" },
    { id: 4, text: "스마일 썹" },
    { id: 5, text: "단체주문" },
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
      id: 0,
      admin_id: 1,
      kname: "샌드위치1",
      ename: "sandwitch1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 1,
      ingred_gram: 1,
      ingred_protein: 1,
      ingred_fat: 1,
      ingred_sugars: 1,
      ingred_salt: 1,
      price: 1000,
      tags: 0,
      kinds: 0,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 1,
      admin_id: 1,
      kname: "샌드위치2",
      ename: "sandwitch2",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 0,
      status: 1,
      created_at: "2023-11-13",
    },
    {
      id: 2,
      admin_id: 1,
      kname: "샌드위치3",
      ename: "sandwitch3",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 3,
      ingred_gram: 3,
      ingred_protein: 3,
      ingred_fat: 3,
      ingred_sugars: 3,
      ingred_salt: 3,
      price: 3000,
      tags: 2,
      kinds: 0,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 3,
      admin_id: 1,
      kname: "랩1",
      ename: "wrap1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 1,
      ingred_gram: 1,
      ingred_protein: 1,
      ingred_fat: 1,
      ingred_sugars: 1,
      ingred_salt: 1,
      price: 1000,
      tags: 4,
      kinds: 1,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 4,
      admin_id: 1,
      kname: "랩2",
      ename: "wrap2",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 5,
      kinds: 1,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 5,
      admin_id: 1,
      kname: "샐러드1",
      ename: "salad1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 6,
      kinds: 2,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 6,
      admin_id: 1,
      kname: "아침메뉴1",
      ename: "breakfast1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 10,
      kinds: 3,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 7,
      admin_id: 1,
      kname: "스마일 썹",
      ename: "smilesub1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 12,
      kinds: 4,
      status: 0,
      created_at: "2023-11-13",
    },
    {
      id: 8,
      admin_id: 1,
      kname: "단체메뉴",
      ename: "group1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 13,
      kinds: 5,
      status: 0,
      created_at: "2023-11-13",
    },
  ]);

  const filterdata = data.filter((a) => id == a.id)
  return (
    <div>
      <div
        className={`CHM_headerMenutab2${isSticky ? " sticky" : ""}`}
        style={{ top: isSticky ? 0 : "unset" }}
      >
        {menuItems.map((menuItem) => (
          <Link
            to={`/menuIntro/${menuItem.id}`}
            key={menuItem.id}
            style={isSticky ? { color: "black" } : {}}
          >
            <div
              onClick={() => handleMenuClick(menuItem.id)}
              style={
                menu == menuItem.id
                  ? isSticky
                    ? { borderBottom: "0.2vw solid black" }
                    : { borderBottom: "0.2vw solid black", color: "black" }
                  : { color: "black" }
              }
            >
              {menuItem.text}
            </div>
          </Link>
        ))}
      </div>
      <DetailContent data={filterdata}></DetailContent>
      <Potassium data={filterdata}></Potassium>
      <Threerool></Threerool>
    </div>
  );
}

export default Detail;
