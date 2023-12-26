import { useEffect, useState } from "react";
import "./newspage.css";
import Event from './event';
import Eventct from './eventct';
import Notice from './notice';
import Advertising from './advertising';
import { useParams, Link } from "react-router-dom";
import { API_URL } from '../config/contansts';
import axios from 'axios';

// import { useParams, Link } from "react-router-dom";

function Newspage() {
  const { product } = useParams();
  const [menu, setMenu] = useState(product);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/event`)
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
    { id: "Event", text: "이벤트·프로모션" },
    { id: "Notice", text: "뉴스·공지사항" },
    { id: "Advertising", text: "광고영상" },
  ];

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
      Event: "#e85a1c",
      Notice: "#0d9133",
      Advertising: "#07a5e6",
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
      <div className={`CHM_headerMenutab1${isSticky ? " sticky" : ""}`} style={{ backgroundColor: color, top: isSticky ? 0 : "unset" }}>
        {menuItems.map((menuItem) => (
          <Link to={`/newsPage/${menuItem.id}`} key={menuItem.id} style={isSticky ? { color: "black" } : {}}>
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

      {menu === "Event" && renderMenuComponent(<Event color={color} />, <Eventct data={data} /> )}
      {menu === "Notice" && renderMenuComponent(<Notice color={color} />, )}
      {menu === "Advertising" && renderMenuComponent(<Advertising color={color} />)}
    </>
  );
}

export default Newspage;