import { useEffect, useState } from "react";
import "./menuintro.css";
import Sandwich from "./sandwitch/sandwitch";
import Breakfast from "./breakfast/breakfast";
import Group from "./group/group";
import Salad from "./salad/salad";
import Smile from "./smile/smile";
import Wrap from "./wrap/wrap";
import Sandwichct from "./sandwitch/sandwichct";
import Breakfastct from './breakfast/breakfastct';
import Groupct from './group/groupct';
import Saladct from './salad/saladct';
import Smilect from './smile/smilect';
import Wrapct from './wrap/wrapct';
import { useParams, Link } from "react-router-dom";

function Menuintro() {
  const { product } = useParams();
  const [menu, setMenu] = useState(product);
  const [isSticky, setIsSticky] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(prevIsSticky => offset > 250 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenu(product);
    const colors = {
      sandwich: "#e85a1c",
      salad: "#0d9133",
      wrap: "#85c441",
      breakfast: "#f2b701",
      smile: "rgb(0, 165, 221)",
      group: "#fa8306"
    };
    setColor(colors[product]);
  }, [product]);

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };

  const renderMenuComponent = (component, componentct) => (
    <>
      {component}
      {componentct}
    </>
  );

  const menuItems = [
    { id: "sandwich", text: "샌드위치" },
    { id: "wrap", text: "랩ㆍ기타" },
    { id: "salad", text: "샐러드" },
    { id: "breakfast", text: "아침메뉴" },
    { id: "smile", text: "스마일 썹" },
    { id: "group", text: "단체주문" }
  ];

  return (
    <>
      <div className={`CHM_headerMenutab${isSticky ? " sticky" : ""}`} style={{ backgroundColor: color, top: isSticky ? 0 : "unset" }}>
        {menuItems.map((menuItem) => (
          <Link to={`/menuIntro/${menuItem.id}`} key={menuItem.id} style={isSticky ? { color: "black" } : {}}>
            <div
              onClick={() => handleMenuClick(menuItem.id)}
              style={
                menu === menuItem.id
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

      {menu === "sandwich" && renderMenuComponent(<Sandwich color={color} />, <Sandwichct />)}
      {menu === "wrap" && renderMenuComponent(<Wrap color={color} />, <Wrapct />)}
      {menu === "salad" && renderMenuComponent(<Salad color={color} />, <Saladct />)}
      {menu === "breakfast" && renderMenuComponent(<Breakfast color={color} />, <Breakfastct />)}
      {menu === "smile" && renderMenuComponent(<Smile color={color} />, <Smilect />)}
      {menu === "group" && renderMenuComponent(<Group color={color} />, <Groupct />)}
    </>
  );
}

export default Menuintro;