import { useEffect, useState } from "react";
import "./menuintro.css";
import Sandwich from "./sandwitch/sandwitch";
import Breakfast from "./breakfast/breakfast";
import Group from "./group/group";
import Salad from "./salad/salad";
import Smile from "./smile/smile";
import Wrap from "./wrap/wrap";
import Sandwichct from "./sandwitch/sandwichct";
import Breakfastct from "./breakfast/breakfastct";
import Groupct from "./group/groupct";
import Saladct from "./salad/saladct";
import Smilect from "./smile/smilect";
import Wrapct from "./wrap/wrapct";
import { useParams, Link } from "react-router-dom";
import img from "./sandwitch/sandwich.png";

function Menuintro() {
  const { product } = useParams();
  const [menu, setMenu] = useState(0);

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

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };

  const menuItems = [
    { id: 0, text: "샌드위치" },
    { id: 1, text: "랩ㆍ기타" },
    { id: 2, text: "샐러드" },
    { id: 3, text: "아침메뉴" },
    { id: 4, text: "스마일 썹" },
    { id: 5, text: "단체주문" },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky((prevIsSticky) => (offset > 250 ? true : false));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenu(product);
    const colors = {
      0: "#e85a1c",
      1: "#0d9133",
      2: "#85c441",
      3: "#f2b701",
      4: "rgb(0, 165, 221)",
      5: "#fa8306",
    };
    setColor(colors[product]);
  }, [product]);

  const renderMenuComponent = (component, componentct) => (
    <>
      {component}
      {componentct}
    </>
  );

  return (
    <>
      <div
        className={`CHM_headerMenutab${isSticky ? " sticky" : ""}`}
        style={{ backgroundColor: color, top: isSticky ? 0 : "unset" }}
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
                    : { borderBottom: "0.2vw solid white" }
                  : {}
              }
            >
              {menuItem.text}
            </div>
          </Link>
        ))}
      </div>

      {menu == 0 &&
        renderMenuComponent(<Sandwich color={color}/>, <Sandwichct data={data}/>)}
      {menu == 1 &&
        renderMenuComponent(<Wrap color={color}/>, <Wrapct data={data}/>)}
      {menu == 2 &&
        renderMenuComponent(<Salad color={color}/>, <Saladct data={data}/>)}
      {menu == 3 &&
        renderMenuComponent(<Breakfast color={color}/>, <Breakfastct data={data}/>)}
      {menu == 4 &&
        renderMenuComponent(<Smile color={color}/>, <Smilect data={data}/>)}
      {menu == 5 &&
        renderMenuComponent(<Group color={color}/>, <Groupct data={data}/>)}
    </>
  );
}

export default Menuintro;
