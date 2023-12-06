import React, { useState, useEffect } from "react";
import SubwayFranchise from "./subwayfranchise"
import FAQ from "./faq"
import BranchInformation from "./branchinformation"
import Briefing from "./briefing"
import FranchiseInquire from "./franchiseinquire"
import "./franchise.css";


function Franchise() {
  const [menu, setMenu] = useState("써브웨이 프랜차이즈");
  const [end, setEnd] = useState("");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
  }, [menu]);

  return(
    <div className="franchisee">
      <div className="f_button">
        <button id="outline">
          <a 
            href="#" 
            className={menu === "써브웨이 프랜차이즈" ? "active" : "noactive"}
            onClick={() => MenuClick("써브웨이 프랜차이즈")}
          >
            써브웨이 프랜차이즈
          </a>
        </button>
        <button id="outline">
          <a 
            href="#" 
            className={menu === "가맹관련 FAQ" ? "active" : "noactive"}
            onClick={() => MenuClick("가맹관련 FAQ")}
          >
            가맹관련 FAQ
          </a>
        </button>
        <button id="outline"> 
          <a 
            href="#" 
            className={menu === "가맹신청 문의" ? "active" : "noactive"}
            onClick={() => MenuClick("가맹신청 문의")}
          >
            가맹신청 문의
          </a>
        </button>
        <button id="outline"> 
          <a 
          href="#" 
          className={menu === "지사안내" ? "active" : "noactive"}
          onClick={() => MenuClick("지사안내")}
          >
            지사안내
          </a>
        </button>
        <button id="outline"> 
          <a 
          href="#" 
          className={menu === "사업설명회" ? "active" : "noactive"}
          onClick={() => MenuClick("사업설명회")}
          >
            사업설명회
          </a>
        </button>
      </div>

      <div className="see_info">
          {menu === "써브웨이 프랜차이즈" && (
            <div className={"start " + end}>
              <SubwayFranchise menu={menu} ></SubwayFranchise>
            </div>
          )}

          {menu === "가맹관련 FAQ" && (
            <div className={"start " + end}>
              <FAQ menu={menu} ></FAQ>
            </div>
          )}

          {menu === "가맹신청 문의" && (
            <div className={"start " + end}>
              <FranchiseInquire menu={menu} ></FranchiseInquire>
            </div>
          )}

          {menu === "지사안내" && (
            <div className={"start " + end}>
              <BranchInformation menu={menu} ></BranchInformation>
            </div>
          )}

          {menu === "사업설명회" && (
            <div className={"start " + end}>
              <Briefing menu={menu} ></Briefing>
            </div>
          )}

        </div>
    </div>
  )
}

export default Franchise;