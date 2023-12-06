import "./branchinformation.css";
import React, { useState, useEffect } from "react";
import img from "../franchise/franchise_img/branch_map01.png";

function BranchInformation() {
  const storedMenu = localStorage.getItem("selectedMenu") || "서울";
  const [menu, setMenu] = useState(storedMenu);
  const [end, setEnd] = useState("");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    
    localStorage.setItem("selectedMenu", menu);
  }, [menu]);

  <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>

  return (
    <div className="branchinformation">
      <h1 id="title2">지사안내</h1>
      <div className="branchinformation_container">
        <div className="button_css">
          <button
            className={menu === "서울" ? "active" : "noactive"}
            onClick={() => MenuClick("서울")}
          >
            서울
          </button>
          <button
            id="bt_css_1"
            className={menu === "수도권" ? "active" : "noactive"}
            onClick={() => MenuClick("수도권")}
          >
            수도권
          </button>
          <button
            className={menu === "지방" ? "active" : "noactive"}
            onClick={() => MenuClick("지방")}
          >
            지방
          </button>
        </div>
        <div className="button_info">
          {menu === "서울" && (
            <div className={"start " + end}>
              <div className="jh_seoul">
                <div className="seoul_box">
                  <div className="seoul_img">
                    <img className="seoul_img1" src={img}/>
                  </div>
                  <ul id="seoul_label">
                    <li><span id="seoul_label1">● </span>서울강북지사</li>
                    <li><span id="seoul_label2">● </span>서울강남지사</li>
                  </ul>
                  <div className="seoul_text">
                    <div className="seoul_text1">
                      <h3>서울강북지사</h3>
                      <p>서울특별시 서초구 강남대로 535 13층</p>
                      <p>연락처 : 010-4920-1965</p>
                      
                    </div>
                    <div id="seoul_text1_line"></div>
                    <div className="seoul_text1">
                      <h3>서울강남지사</h3>
                      <b>이연주 지사장</b>
                      <p>서울시 서초구 사평대로 55길 112-7 2층</p>
                      <p>연락처 : 02-6356-7907</p>
                      <p>팩스번호 : 02-6356-7907</p>
                    </div>
                    <div id="seoul_a">
                    <a href="/franchise">가맹요건 알아보기 <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {menu === "수도권" && (
            <div className={"start " + end}>
              <div className="jh_center"></div>
            </div>
          )}
          {menu === "지방" && (
            <div className={"start " + end}>
              <div className="jh_country"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BranchInformation;