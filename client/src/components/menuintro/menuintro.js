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
import axios from 'axios';
import { API_URL } from '../config/contansts';

function Menuintro() {
  const { product } = useParams();
  const [menu, setMenu] = useState(0);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API_URL}/food/menuintro`)
      .then((res) => {
        console.log("db조회 완료");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

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
