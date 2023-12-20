import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./center.css";
import menuItems from "./data/tabdata";
import CL_Data from "./data/sandwich_data/cl_data";
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Center = () => {
  //서버에서 받아온 데이터 아래 data에 있음
  const [data, setData] = useState("")
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

  const rendertext = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const [menuData, setMenuData] = useState(CL_Data);

  return (
    <>
      <div className="center_hd_section">
        <div className="center_hd_menu">
          <h2 className="center_hd2">Subway's Popular Menu</h2>
          <div className="center_hd_tab">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setMenuData(item.data);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="center_main_section">
          <div className="subway_menu_section">
            {menuData.map((item) => (
              <div key={item.id} className="menus_sction">
                <Link to={item.path}>
                  <img src={item.image} alt={item.alt} />
                  <div className="menus_name">{item.title}</div>
                  <div className="menus_info">
                    <p className="menu_p_info">{rendertext(item.text)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Center;
