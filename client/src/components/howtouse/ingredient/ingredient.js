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
import Howtousesubway from '../howtousesubway/howtousesubway';
import Groupmenu from '../groupmenu/groupmenu';
import { useParams, Link } from "react-router-dom";

function Ingredient() {
  const { product } = useParams();
  const [menu, setMenu] = useState(product);
  const [isSticky, setIsSticky] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(prevIsSticky => offset > 200 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenu(product);
    const colors = {
      howtousesubway: "#e85a1c",
      groupmenu: "#0d9133",
      salad: "#85c441",
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
    { id: "howtousesubway", text: "써브웨이 이용방법" },
    { id: "groupmenu", text: "단체메뉴 이용방법" },
    { id: "salad", text: "신선한 재료소개" },
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

      {menu === "howtousesubway" && renderMenuComponent(<Howtousesubway color={color} />, )}
      {menu === "groupmenu" && renderMenuComponent(<Groupmenu color={color} />, )}
      {menu === "salad" && renderMenuComponent(<Salad color={color} />, <Saladct />)}
    </>
  );
}

export default Ingredient;