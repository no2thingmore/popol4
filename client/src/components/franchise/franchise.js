import React, { useState, useEffect } from "react";
import SubwayFranchise from "./subwayfranchise/subwayfranchise"
import FAQ from "./faq/faq"
import BranchInformation from "./branchinformation/branchinformation"
import Briefing from "./briefing/briefing"
import FranchiseInquire from "./franchiseinquire/franchiseinquire"
import { useParams } from "react-router-dom";
import "./franchise.css";


function Franchise() {
  const { franchisee } = useParams();
  const [menu, setMenu] = useState( franchisee );
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
            href="/franchise/subwayfranchise" 
            className={menu === "subwayfranchise" ? "active" : "noactive"}
            onClick={() => MenuClick("subwayfranchise")}
          >
            써브웨이 프랜차이즈
          </a>
        </button>
        <button id="outline">
          <a 
            href="/franchise/faq" 
            className={menu === "faq" ? "active" : "noactive"}
            onClick={() => MenuClick("faq")}
          >
            가맹관련 FAQ
          </a>
        </button>
        <button id="outline"> 
          <a 
            href="/franchise/franchiseinquire" 
            className={menu === "franchiseinquire" ? "active" : "noactive"}
            onClick={() => MenuClick("franchiseinquire")}
          >
            가맹신청 문의
          </a>
        </button>
        <button id="outline"> 
          <a 
          href="/franchise/branchinformation" 
          className={menu === "branchinformation" ? "active" : "noactive"}
          onClick={() => MenuClick("branchinformation")}
          >
            지사안내
          </a>
        </button>
        <button id="outline"> 
          <a 
          href="/franchise/briefing" 
          className={menu === "briefing" ? "active" : "noactive"}
          onClick={() => MenuClick("briefing")}
          >
            사업설명회
          </a>
        </button>
      </div>

      <div className="see_info">
          {menu === "subwayfranchise" && (
            <div className={"start " + end}>
              <SubwayFranchise menu={menu} ></SubwayFranchise>
            </div>
          )}

          {menu === "faq" && (
            <div className={"start " + end}>
              <FAQ menu={menu} ></FAQ>
            </div>
          )}

          {menu === "franchiseinquire" && (
            <div className={"start " + end}>
              <FranchiseInquire menu={menu} ></FranchiseInquire>
            </div>
          )}

          {menu === "branchinformation" && (
            <div className={"start " + end}>
              <BranchInformation menu={menu} ></BranchInformation>
            </div>
          )}

          {menu === "briefing" && (
            <div className={"start " + end}>
              <Briefing menu={menu} ></Briefing>
            </div>
          )}
        </div>
    </div>
  )
}

export default Franchise;