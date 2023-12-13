import { useEffect, useState } from "react";
import "./ingredient.css";
import Freshingredients from './Freshingredients/freshingredients';
import Freshingredientsct from './Freshingredients/freshingredientsct';
import Howtousesubway from '../howtousesubway/howtousesubway';
import Groupmenu from '../groupmenu/groupmenu';
import { useParams, Link } from "react-router-dom";

// import { useParams, Link } from "react-router-dom";

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
      freshingredients: "#07a5e6",
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
    { id: "freshingredients", text: "신선한 재료소개" },
  ];

  return (
    <>
      <div className={`CHM_headerMenutab1${isSticky ? " sticky" : ""}`} style={{ backgroundColor: color, top: isSticky ? 0 : "unset" }}>
        {menuItems.map((menuItem) => (
          <Link to={`/ingreDient/${menuItem.id}`} key={menuItem.id} style={isSticky ? { color: "black" } : {}}>
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
      {menu === "freshingredients" && renderMenuComponent(<Freshingredients color={color} />, <Freshingredientsct />)}
    </>
  );
}

export default Ingredient;